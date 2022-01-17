const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const mailService = require("./mailService")
const tokenService = require("./tokenService")
const userDto = require("../dtos/userDto")
const User = require("../models/userModel")
const generatePassword = require('password-generator');
const ApiError = require("../exeptions/apiError")
const UserDto = require("../dtos/userDto")



class UserService {
   async registration(email, password, name) {
      const condidate = await userModel.findOne({where: {email}});
      if(condidate) {
         throw ApiError.BadRequest(`Пользователь с таким email уже существует`)
      }
      const hashPass = await bcrypt.hash(password, 3);

      const activationCode = generatePassword(8, false, /\d/);
      const user = await userModel.create({ email, password: hashPass, name, activationCode });
      await mailService.sendMailWithCode(email, activationCode);

      const userDto = new userDto(user);
      const tokens = tokenService.generateTokens({ ...userDto });
      await tokenService.saveToken(userDto.id, tokens.refreshToken);

      return {
         ...tokens,
         user: userDto,
      };
   }

   async activate(email, activationCode) {
      const user = await User.findOne({where: {email, activationCode} });

      if (!user) {
         throw ApiError.BadRequest("Вы ввели не верный код");
      } 
      
      user.isActivated = true;
      await user.save()
   }

   async login(email, password) {
      const user = await User.findOne({where: {email} });
      if (!user) {
         throw ApiError.BadRequest("Пользователь не найден");
      }

      const passEqual = await bcrypt.compare(password, user.password);
      if(!passEqual) {
         throw ApiError.BadRequest("Не верный пароль");
      }

      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({...userDto})

      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return {
         ...tokens,
         user: userDto,
      };
   }

   async logout(refreshToken) {
      await tokenService.removeToken(refreshToken);
      return {status: true};
   }

   async refresh(refreshToken) {
      if(!refreshToken) {
         throw ApiError.UnauthorizedError();
      }

      const userData = tokenService.validateRefreshToken(refreshToken)
      const tokenDb = tokenService.findToken(refreshToken)

      if(!userData || !tokenDb) {
         throw ApiError.UnauthorizedError();
      }

      const user = await userModel.findOne({where: {id: userData.id}})

      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({...userDto})

      await tokenService.saveToken(userDto.id, tokens.refreshToken);
      return {
         ...tokens,
         user: userDto,
      };
   }
}

module.exports = new UserService()
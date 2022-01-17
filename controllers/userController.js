const { validationResult } = require("express-validator");
const ApiError = require("../exeptions/apiError");
const User = require("../models/userModel");
const userService = require("../service/userService");

class UserController {
   async registration(req,res,next) {
      try {
         const errors = validationResult(req);
         if(!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка валидации', errors.array()));
         }

         const {email,password, name} = req.body;
         const userData = await userService.registration(email,password, name);
        
         res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly:true});
         return res.json(userData) 
      } catch (e) {
         next(e);    
      }
   }

   async login(req,res,next) {
      try {
         const {email,password} = req.body;
         const userData = await userService.login(email,password);

         res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly:true});
         return res.json(userData) 
      } catch (e) {
         next(e);    
      }
   }

   async logout(req,res,next) {
      try {
         const {refreshToken} = req.cookies;
         const token = await userService.logout(refreshToken)

         res.clearCookie('refreshToken');
         return res.json(token)
      } catch (e) {
         next(e);    
      }
   }

   async activate(req,res,next) {
      try {
         const {activationCode, email} = req.body;
         await userService.activate(email,activationCode);
      } catch (e) {
         next(e)
      }
   }

   async refresh(req,res,next) {
      try {
         const {refreshToken} = req.body;
         
         const userData = await userService.refresh(refreshToken);
         res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly:true});
         return res.json(userData) 
      } catch (e) {
         next(e)
      }
   }

   async getUsers(req,res,next) {
      try {
         const users = await User.findAll()
   
         return res.json(users);
      } catch (e) {
         next(e)
      }
   }

}

module.exports = new UserController()
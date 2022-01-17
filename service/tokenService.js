require('dotenv').config()
const jwt = require('jsonwebtoken')
const tokenModel = require('../models/tokenModel')

class TokenService {
   generateTokens(payload) {
      const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_KEY, { expiresIn: process.env.JWT_ACCESS_LIFE });
      const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_KEY, { expiresIn: process.env.JWT_REFRESH_LIFE });

      return {
         accessToken,
         refreshToken,
      };
   }

   validateAccessToken(token) {
      try {
         const userData = jwt.verify(token, process.env.JWT_ACCESS_KEY)
         return userData
      } catch (e) {
         return null
      }
   }

   validateRefreshToken(token) {
      try {
         const userData = jwt.verify(token, process.env.JWT_REFRESH_KEY)
         return userData
      } catch (e) {
         return null
      }
   }

   async saveToken(id, refreshToken) {
      const tokenData = await tokenModel.findOne({ where: { user: id } });

      if (tokenData) {
         tokenData.refreshToken = refreshToken;
         return tokenData.save();
      }
      const token = await tokenModel.create({ user: id, refreshToken });
      return token;
   }

   async removeToken(refreshToken) {
      const tokenData = await tokenModel.destroy({ where: { refreshToken } });
      return tokenData;
   }

   async findToken(refreshToken) {
      const tokenData = await tokenModel.findOne({ where: { refreshToken } });
      return tokenData;
   }
}

module.exports = new TokenService()
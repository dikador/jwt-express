const ApiError = require("../exeptions/apiError");
const tokenService = require("../service/tokenService");

module.exports = (req,res,next) => { 
   try {
      const accessToken = req.headers.authorization.split(' ')[1];

      const userData = tokenService.validateAccessToken(accessToken);

      if(!userData) {
         return next(ApiError.UnauthorizedError())
      }

      console.log(userData);
      req.user = userData;
      next();
   } catch (e) {
      return next(ApiError.UnauthorizedError())
   }

}
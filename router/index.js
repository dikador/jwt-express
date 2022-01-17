const Router = require('express').Router;
const router = new Router();
const {body} = require('express-validator')
const userController = require('./../controllers/userController')
const authMiddleware = require('../middlewares/authMiddleware')



router.post('/registration', 
body('email').isEmail(),
body('password').isLength({min:4, max:40}),
userController.registration)

router.post("/login", userController.login);

router.post('/logout', userController.logout)
router.post('/activate', userController.activate)

router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

module.exports = router;
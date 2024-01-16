const express = require("express")

const userRouter = express.Router()

const userController = require('./user.controller')

userRouter.post( '/generate' , userController.getApiKey  )
userRouter.post( '/validate' , userController.getValidated  )
userRouter.get('/isValidated' , userController.getValidationStatus)
userRouter.get('/askToValidate' , userController.getRequestToValidate)
// userRouter.get('/adminValidate' , userController.getAdminValidation)

module.exports = userRouter
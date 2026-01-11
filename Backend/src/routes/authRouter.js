import express from 'express'
import { login, logout, register, userAuthenticator } from '../controllers/authController.js'
import userAuth from '../middleware/userAuth.js'

const authRouter = express.Router()

authRouter.post('/auth/register', register)
authRouter.post('/auth/login', login)
authRouter.post('/auth/logout', logout)
authRouter.get('/auth/checkauth', userAuth, userAuthenticator)

export default authRouter
import express from 'express'
import { login, logout, register } from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/auth/register', register)
authRouter.post('/auth/login', login)
authRouter.post('/auth/logout', logout)

export default authRouter
import express from 'express'

const auth = express.Router()

auth.get('/auth')

export default auth
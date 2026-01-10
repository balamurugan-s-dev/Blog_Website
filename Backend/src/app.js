import express from 'express'
import cors from 'cors'
import authRouter from './routes/authRouter.js'

const app = express()
app.use(express.json())
app.use(cors({origin: 'http://localhost:5174', credentials: true}))

app.get('', (req, res) => {res.json("Backend api Server")})
app.use('/api', authRouter)


export default app
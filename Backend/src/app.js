import express from 'express'
import cors from 'cors'
// import auth from './routes/authRouter.js'

const app = express()
app.use(express.json())
app.use(cors({origin: 'http://localhost:5173'}))

app.get('/', (req, res) => {res.json("api is working")})
// app.use('/api', auth)


export default app
import express from 'express';
import cors from 'cors';
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';
import postRouter from './routes/postRouter.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: ['http://localhost:5173', 'http://10.58.240.124:5173'], credentials: true}));

app.get('', (req, res) => {res.json("Backend api Server")});
app.use('/api', authRouter);
app.use('/data', postRouter);


export default app;
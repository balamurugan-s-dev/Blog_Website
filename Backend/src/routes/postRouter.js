import express from 'express';
import { getPost, getPosts } from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/post', getPosts)
postRouter.get('/post/:slug', getPost)

export default postRouter;
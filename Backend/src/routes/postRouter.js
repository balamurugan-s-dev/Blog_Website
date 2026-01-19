import express from 'express';
import { createPost, getPost, getPosts } from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/post', getPosts)
postRouter.get('/post/:slug', getPost)
postRouter.post('/post/create', createPost)

export default postRouter;
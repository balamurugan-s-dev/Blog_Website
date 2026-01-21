import express from 'express';
import { createPost, deletePost, getPost, getPosts } from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/post', getPosts)
postRouter.get('/post/:slug', getPost)
postRouter.post('/post/create', createPost)
postRouter.delete('/post/delete/:id', deletePost)

export default postRouter;
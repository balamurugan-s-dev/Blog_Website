import postModel from "../models/post.model.js";

export const getPosts = async(req, res) => {
    const posts = await postModel.find();
    res.status(200).json({posts: posts});
}

export const getPost = async(req, res) => {
    const post = await postModel.findOne({slug:req.params.slug});
    res.status(200).json({post: post});
}
const Post = require("../models/post");

// Getting All Posts
const getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find({});
        res.status(201).json(allPosts);
    } catch (error) {
        res.sendStatus(400).json({ error }).end();
    }
}

// Creating a new Post
const createPost = async (req, res) => {
    try {
        const post = req.body;
        const newPost = new Post(post);
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ error });
    }
}

const deletePost = (req, res) => {
    res.send(" works");
}

module.exports = {
    getAllPosts,
    createPost,
    deletePost
};
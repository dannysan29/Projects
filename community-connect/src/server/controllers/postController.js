const Post = require('../models/Post');
const User = require('../models/User');

const postController = {
    createPost: async (req, res) => {
        try {
            const { title, content } = req.body;
            const newPost = new Post({
                title,
                content,
                user: req.user.id // Assuming you have auth middleware that sets req.user
            });

            const post = await newPost.save();
            res.json(post);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    },

    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find().sort({ date: -1 }).populate('user', 'name'); // Populate user's name
            res.json(posts);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    },

    getPostById: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id).populate('user', 'name');
            if (!post) {
                return res.status(404).json({ msg: 'Post not found' });
            }
            res.json(post);
        } catch (err) {
            console.error(err.message);
            if (err.kind === 'ObjectId') { // Check for invalid ObjectId
                return res.status(404).json({ msg: 'Post not found' });
            }
            res.status(500).send('Server Error');
        }
    },

    updatePost: async (req, res) => {
        try {
            const { title, content } = req.body;
            let post = await Post.findById(req.params.id);

            if (!post) {
                return res.status(404).json({ msg: 'Post not found' });
            }

            // Check if the user is the author of the post
            if (post.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'Not authorized' });
            }

            post.title = title || post.title; // Update only if new title is provided
            post.content = content || post.content;

            const updatedPost = await post.save();
            res.json(updatedPost);

        } catch (err) {
            console.error(err.message);
            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: 'Post not found' });
            }
            res.status(500).send('Server Error');
        }
    },

    deletePost: async (req, res) => {
        try {
            const post = await Post.findById(req.params.id);

            if (!post) {
                return res.status(404).json({ msg: 'Post not found' });
            }

            // Check if the user is the author of the post
            if (post.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'Not authorized' });
            }

            await post.remove();
            res.json({ msg: 'Post removed' });

        } catch (err) {
            console.error(err.message);
            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: 'Post not found' });
            }
            res.status(500).send('Server Error');
        }
    }
};

module.exports = postController;
const Comment = require('../models/Comment');
const Post = require('../models/Post');

const commentController = {

    updateComment: async (req, res) => {
        try {
            const { text } = req.body;
            let comment = await Comment.findById(req.params.id);

            if (!comment) {
                return res.status(404).json({ msg: 'Comment not found' });
            }

            // Check if the user is the author of the comment or an admin
            if (comment.user.toString() !== req.user.id && req.user.role !== 'admin') { 
                return res.status(401).json({ msg: 'Not authorized' });
            }

            comment.text = text || comment.text; 

            const updatedComment = await comment.save();
            res.json(updatedComment);

        } catch (err) {
            console.error(err.message);
            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: 'Comment not found' });
            }
            res.status(500).send('Server Error');
        }
    },

    deleteComment: async (req, res) => {
        try {
            const comment = await Comment.findById(req.params.id);

            if (!comment) {
                return res.status(404).json({ msg: 'Comment not found' });
            }

            // Check if the user is the author of the comment or an admin
            if (comment.user.toString() !== req.user.id && req.user.role !== 'admin') { 
                return res.status(401).json({ msg: 'Not authorized' });
            }

            await comment.remove();
            res.json({ msg: 'Comment removed' });

        } catch (err) {
            console.error(err.message);
            if (err.kind === 'ObjectId') {
                return res.status(404).json({ msg: 'Comment not found' });
            }
            res.status(500).send('Server Error');
        }
    },
};

module.exports = commentController;
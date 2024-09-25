const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');   
 // We'll create this next
const { auth } = require('../middleware/auth');

router.post('/', auth, postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', auth,   
 postController.updatePost); // Add auth middleware as needed
router.delete('/:id', auth, postController.deletePost); // Add auth middleware as needed

module.exports = router;
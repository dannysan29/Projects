const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');   
  
 // We'll create this next
const { auth } = require('../middleware/auth');

router.post('/:postId', auth, commentController.createComment);
router.get('/:postId', commentController.getCommentsForPost);
router.put('/:id', auth, commentController.updateComment); // Add auth middleware as needed
router.delete('/:id', auth, commentController.deleteComment); // Add auth middleware as needed

module.exports = router;
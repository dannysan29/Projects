const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');   
const auth = require('../middleware/auth');  

const { check, validationResult } = require('express-validator');

// Define routes and their corresponding controller functions
router.post('/register', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 8 characters long and contain uppercase, lowercase letters, and numbers').custom(value => {
        if (!passwordSchema.validate(value)) { // Use your passwordSchema here
            throw new Error('Password must be at least 8 characters long and contain uppercase, lowercase letters, and numbers');
        }
        return true; 
    })
], userController.registerUser); 

router.post('/login', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], userController.loginUser); 

router.get('/profile', auth, userController.getUserProfile); 
router.put('/profile', auth, userController.updateUserProfile);

module.exports = router;
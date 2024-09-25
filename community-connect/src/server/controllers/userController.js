const User = require('../models/User'); // Import your User model
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating JWT tokens
const passwordValidator = require('password-validator'); // For validating passwords

const passwordSchema = new passwordValidator();
passwordSchema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()   
                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.has().not().spaces()                           // Should not have spaces   


const userController = {

    registerUser: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
                return   
 res.status(400).json({ msg: 'User already exists' });
            }

            // Validate password 
            if (!passwordSchema.validate(password)) {
                return res.status(400).json({ 
                    msg: 'Password must be at least 8 characters long and contain uppercase, lowercase letters, and numbers' 
                });
            }

            user = new User({
                name,
                email,
                password
            });

            // Hash the password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();   


            // Generate JWT token
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,   

                'Thebeatles-1969', // Consider using an environment variable for this
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    },

    loginUser:   
 async (req, res) => {
        try {
            const { email, password } = req.body;

            // Check if user exists
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'Invalid Credentials' });
            }

            // Compare   
 password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return   
 res.status(400).json({ msg: 'Invalid Credentials' });
            }

            // Generate JWT token
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,   

                'Thebeatles-1969', // Consider using an environment variable for this
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }

    deleteUserProfile: async (req, res) => {
        try {
            await User.findByIdAndRemove(req.user.id);
            res.json({ msg: 'User deleted' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server  Error');
    }
               
        }
    }

    // Add more controller functions for other CRUD operations
}

module.exports = userController;
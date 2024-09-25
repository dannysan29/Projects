const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { generateAccessToken, verifyAccessToken } = require('../utils/jwt');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Login a user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const accessToken = generateAccessToken({ id: user.id, email: user.email });
    res.json({ accessToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
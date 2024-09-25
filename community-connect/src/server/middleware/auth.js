const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if no token
    if (!token)   
 {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token,   
 'your-secret-key'); // Replace with your actual secret key
        req.user = decoded.user;
        next();
    } catch (err)   
 {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied. Admin role required.' });
    }
    next();
};

const isModerator = (req, res, next) => {
    if (req.user.role !== 'moderator' && req.user.role !== 'admin') {
        return res.status(403).json({ msg: 'Access denied. Moderator or Admin role required.' });
    }
    next();
};

module.exports = { auth, isAdmin, isModerator };
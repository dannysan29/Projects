const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
const connectDB = require('./services/db');
const userRoutes = require('./routes/userRoutes');
const {auth, isAdmin } = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const dbURI = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET;

// Connect to MongoDB
connectDB();

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const app = express();

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Define routes
app.use('/api/users', require('./routes/routes/users'));
app.use('/api/events', require('./routes/events'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/discussions', require('./routes/discussions'));
app.use('/api/users', userRoutes);
router.delete('/:id', auth, isAdmin, userController.deleteUser);
app.use(errorHandler);

// Start the server 
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
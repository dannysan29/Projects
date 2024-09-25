const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURI = process.env.NODE_ENV === 'test' 
            ? 'mongodb://localhost:27017/community-connect-test' // Test database URI
            : process.env.MONGODB_URI; // Development or production database URI

        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
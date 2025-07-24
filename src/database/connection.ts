import mongoose from 'mongoose';

import databaseConfig from '@config/database';

const connectDB = async () => {
    try {
        await mongoose.connect(databaseConfig.uri);
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error);
        process.exit(1);
    }
};

export default connectDB;

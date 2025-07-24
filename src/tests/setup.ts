import mongoose from 'mongoose';

import connectDB from '@database/connection';

beforeAll(async () => {
    await connectDB();
});

afterAll(async () => {
    await mongoose.disconnect();
});

// Mock console.log to prevent cluttering the test output
jest.spyOn(console, 'log').mockImplementation(() => {});

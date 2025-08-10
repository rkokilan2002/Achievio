import 'mongoose';
import mongoose from 'mongoose';

export const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB is connected: ${conn.connection.host}.`.cyan.underline);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
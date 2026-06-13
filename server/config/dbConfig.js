import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = async() => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("MongoDB Connected");
    }
    catch(err){
        console.log(err);
    }
}

export default dbConfig;
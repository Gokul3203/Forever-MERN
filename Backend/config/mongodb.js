import mongoose from "mongoose";

const connectDB=async ()=>{
    mongoose.connection.on('Connected',()=>{
        console.log('MongoDb Connected')
    })

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/ecommerce`)
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};


export default connectDB;
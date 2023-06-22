import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export {connectDB}
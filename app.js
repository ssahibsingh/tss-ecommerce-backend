import express from 'express';
import api from "./routes/api.js";
import { connectDB } from './config/db.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Connect to MongoDB
// connectDB();

app.use(express.json());


app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the API"
    })
    // res.send("Hello World");
})
app.use('/api', api);


app.listen(process.env.PORT, () => {
    console.log(`server connected at port : ${process.env.PORT}`);
})
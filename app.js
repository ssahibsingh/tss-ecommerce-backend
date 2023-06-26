import express from 'express';
import dotenv from 'dotenv';
import api from "./routes/api.js";
import { connectDB } from './config/db.js'
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());

// Connect to MongoDB
connectDB();

app.use(express.json());


app.get('/', (req, res) => {
    // res.send("Hello World");
    res.json({
        success: true,
        message: "Welcome to the API"
    })
})

// app.use('/', api);


app.use('/api', api);

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server connected at port: ${PORT}`);
})
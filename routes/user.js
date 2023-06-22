import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post('/register', async (req, res) => {
    let { name, email, password } = req.body;

    try {
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.json({
                success: false,
                message: "User already exists"
            })
        }
        else {
            let hashedPassword = await bcrypt.hash(password, 10);
            const result = await User.create({ name, email, password: hashedPassword });
            res.json({
                success: true,
                user: result
            })
        }

    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "Something went wrong"
        })
    }
})

router.post('/login', async (req, res) => {
    let { email, password } = req.body;
    try {
        const result = await User.findOne({ email });
        if (result) {
            let isMatch = await bcrypt.compare(password, result.password);
            if (isMatch) {
                res.json({
                    success: true,
                    user: result
                })
            }
            else {
                res.json({
                    success: false,
                    message: "Incorrect Password"
                })
            }
        }
        else {
            res.json({
                success: false,
                message: "User does not exist"
            })
        }
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "Something went wrong"
        })
    }
})

export default router;
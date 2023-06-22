import { Router } from 'express';
import Product from '../models/Product.js';
const router = Router();

// POST: add a Product
router.post('/', async (req, res) => {
    let { productId, title, image, price, description } = req.body;
    try {
        let checkId = await Product.findOne({ productId: productId });
        if (checkId) {
            return res.json({
                success: false,
                message: "Same Product Id already exists"
            })
        }
        else {
            let result = await Product.create({ productId, title, image, price, description });
            res.json({
                success: true,
                product: result
            })
        }
    } catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "Something went wrong"
        })
    }
})

// GET: Get all products
router.get('/', async (req, res) => {
    try {
        let products = await Product.find({});
        res.json({
            success: true,
            products: products
        });
    }
    catch (err) {
        console.log(err);
        res.json({
            success: false,
            message: "Something went wrong"
        })
    }
})

// GET: Get a product by id
router.get('/:id', async (req, res) => {
    let { id } = req.params;
    try {

        let foundProduct = await Product.find({ productId: id });
        res.json({
            success: true,
            product: foundProduct
        })
    } catch {
        console.log(err);
        res.json({
            success: false,
            message: "Something went wrong"
        })
    }
})

export default router;
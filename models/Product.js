import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    productId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    }
})
let Product = model('Product', productSchema);
export default Product;
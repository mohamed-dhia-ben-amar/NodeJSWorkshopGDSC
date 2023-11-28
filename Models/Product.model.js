import { Schema, model } from 'mongoose';

const productSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the product's name"]
        },
        quantity: {
            type: Number,
            default: 0
        },
        price: {
            type: Number,
            required: [true, "Please enter the product's price"]
        },
        bought: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
)


const Product = model('Product', productSchema);

export default Product;
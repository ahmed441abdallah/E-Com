import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: { required: true, type: String },
    price: { required: true, type: Number },
    description: { required: true, type: String },
    image: { required: true, type: String },
    stock: { required: true, type: Number },

})
export const productModel = mongoose.model("Product", productSchema);
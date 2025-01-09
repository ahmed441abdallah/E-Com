import mongoose from "mongoose";
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    products: {
        type: Array,
        required: true,
        ref: "Product"
    },
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "completed"],
        default: "pending"
    }
})
export const cartModel = mongoose.model("Cart", cartSchema);
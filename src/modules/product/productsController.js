import { productModel } from "../../../database/models/product/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        return res.json(products);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
export const addProduct = async (req, res) => {
    const { name, price, description, image, stock } = req.body;
    try {
        const product = new productModel({ name, price, description, image, stock });
        await product.save();
        return res.json({ message: "Product added successfully" });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}
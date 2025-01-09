import express from "express";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import userRoutes from "./src/routes/userRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import dotenv from "dotenv";
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

dbConnection()
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
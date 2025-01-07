import mongoose from "mongoose";
export const dbConnection = () => {
    mongoose.connect("mongodb://localhost:27017/ecommerce").then(() => {
        console.log("Database connected");
    }).catch((err) => {
        console.log("Error in database connection", err);
    })
}
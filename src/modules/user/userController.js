import { userModel } from "../../../database/models/user/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (user) return res.status(400).send("User already exists");
        bcrypt.hash(password, 8, function (err, hash) {
            const newUser = new userModel({ name, email, password: hash });
            newUser.save();
            const token = jwt.sign({ id: newUser._id, name: newUser.name, email: newUser.email }, process.env.JWT_SECRET);
            return res.json({ message: "user created successfully", token });
        });
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }


}
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.status(400).send("User not found");
        const isMatch = bcrypt.compare(password, user.password);
        if (isMatch) {
            const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, 'F69F98C64C4E57B39BF8CEC7B7FC6');
            return res.json({ message: "user logged in successfully", token });
        }
        else return res.status(400).send("Invalid Credentials");

    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }

}
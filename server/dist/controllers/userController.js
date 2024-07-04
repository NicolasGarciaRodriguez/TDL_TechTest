import { UserModel } from "../models/userModel.js";
import { errorHandler } from "../handlers/errorHandler.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET ?? '';
export const register = async (req, reply) => {
    const { email, password } = req.body;
    try {
        const user = new UserModel({ email, password });
        await user.save();
        reply.send({ message: 'User registered successfully', isError: false });
    }
    catch (error) {
        errorHandler(error, reply);
    }
};
export const login = async (req, reply) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            reply.status(401).send({ message: 'Invalid email or password', isError: true });
            return;
        }
        const isMatch = await user.comparePasswords(password);
        if (!isMatch) {
            reply.status(401).send({ message: 'Invalid email or password', isError: true });
            return;
        }
        const sessionToken = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        reply.send({ message: 'Login successful', sessionToken, isError: false });
    }
    catch (error) {
        errorHandler(error, reply);
    }
};

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
        reply.setCookie('sessionToken', sessionToken, {
            httpOnly: true,
            sameSite: 'strict',
            secure: false,
            path: '/',
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        });
        reply.send({ message: 'Login successful', isError: false });
    }
    catch (error) {
        errorHandler(error, reply);
    }
};
export const logout = async (req, reply) => {
    try {
        reply.clearCookie('sessionToken', {
            httpOnly: true,
            sameSite: 'strict',
            secure: false,
            path: '/'
        });
        reply.send({ message: 'Logout successful', isError: false });
    }
    catch (error) {
        errorHandler(error, reply);
    }
};

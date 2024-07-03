import {UserModel} from "../models/userModel.js";
import {errorHandler} from "../handlers/errorHandler.js"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IRegisterRequest } from "../models/request/IRegisterRequest.js";
import { IRegisterReply } from "../models/reply/IRegisterReply.js";
import { ILoginRequest } from "../models/request/ILoginRequest.js";
import { ILoginReply } from "../models/reply/ILoginReply.js";
import { IError } from "../models/IError.js";

dotenv.config();


const JWT_SECRET: string = process.env.JWT_SECRET ?? '';

export const register = async (req: IRegisterRequest, reply: IRegisterReply) => {
    const {email, password} = req.body;
    try {
        const user = new UserModel({email, password});
        await user.save();
        reply.send({ message: 'User registered successfully', isError: false });
    } catch (error: any) {
        errorHandler(error as IError, reply);
    }
}

export const login = async (req: ILoginRequest, reply: ILoginReply) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            reply.status(401).send({ message: 'Invalid email or password' });
            return;
        }

        const isMatch = await user.comparePasswords(password);
        if (!isMatch) {
            reply.status(401).send({ message: 'Invalid email or password', isError: false });
            return;
        }
        const sessionToken = jwt.sign({id: user._id, email: user.email}, JWT_SECRET, {expiresIn: '1h'})
        reply.send({ message: 'Login successful', sessionToken, isError: false });
    } catch (error: any) {
        errorHandler(error as IError, reply);
    }
}
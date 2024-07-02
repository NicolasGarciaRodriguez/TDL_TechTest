import {UserModel} from "../models/userModel.js";
import {errorHandler} from "../handlers/errorHandler.js"

export const registerUser = async (req, reply) => {
    const {email, password} = req.body;
    try {
        const user = new UserModel({email, password});
        await user.save();
        reply.send({ message: 'User registered successfully' });
    } catch (error) {
        errorHandler(error, reply);
    }
}
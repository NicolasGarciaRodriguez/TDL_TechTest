import { FastifyReply } from "fastify";
import { IError } from "../models/IError.js";

export const errorHandler = (error: IError, reply: FastifyReply) => {
    if (error.name === 'ValidationError') {
        const errors = Object.values(error.errors).map(err => err.message);
        reply.status(400).send({ message: 'Validation error', errors, isError: true });
    } else if (error.code == '11000') {
        reply.status(400).send({ message: 'Email already in use' });
    } else if (error.name === 'CastError') {
        reply.status(400).send({ message: 'Invalid data type' });
    } else if (error.name === 'MongoNetworkError') {
        reply.status(503).send({ message: 'Database connection error' });
    } else {
        console.error('Error:', error);
        reply.status(500).send({ message: 'An error occurred' });
    }
};

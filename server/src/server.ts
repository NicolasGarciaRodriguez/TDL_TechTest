import Fastify from 'fastify';
import { connectDB } from './database/database.js';
import userRoutes from './routes/routes.js';
import dotenv from 'dotenv';
import FastifyCors from '@fastify/cors';
import { FastifyCookieOptions } from '@fastify/cookie';
import fastifyCookie from '@fastify/cookie';

dotenv.config();

const fastify = Fastify({
    logger: false
});
fastify.register(FastifyCors, {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
});
fastify.register(userRoutes, { prefix: 'api/users' });
fastify.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
  } as FastifyCookieOptions)

const port = process.env.PORT || 8000;
const uri: string = process.env.MONGO_URI || '';

const startServer = async () => {
    try {
        connectDB(uri);
        await fastify.listen({port: Number(port), host: '0.0.0.0'}, (error) => {
            if (error) {
                console.error(error);
                process.exit(1);
            }
        });
        console.log(`Server running on port: ${port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

startServer();

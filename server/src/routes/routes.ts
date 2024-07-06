import { FastifyInstance } from "fastify";
import {register, login, logout} from "../controllers/userController.js";

const routes = async (fastify: FastifyInstance) => {
    fastify.post("/register", register);
    fastify.post("/login", login);
    fastify.post("/logout", logout);
}

export default routes;
import { FastifyInstance } from "fastify";
import {register, login} from "../controllers/userController.js";

const routes = async (fastify: FastifyInstance) => {
    fastify.post("/register", register);
    fastify.post("/login", login);
}

export default routes;
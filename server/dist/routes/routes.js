import { register, login } from "../controllers/userController.js";
const routes = async (fastify) => {
    fastify.post("/register", register);
    fastify.post("/login", login);
};
export default routes;

import {registerUser} from "../controllers/userController.js";

const routes = async (fastify, options) => {
    fastify.post("/register", registerUser);
}

export default routes;
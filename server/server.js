import Fastify from "fastify";
import {connectDB} from "./database/database.js";
import routes from "./routes/routes.js";

const fastify = Fastify({
    logger:false
});

fastify.register(routes, {prefix:"api/users"});

const port = process.env.PORT;
const uri = process.env.MONGO_URI;
const startServer = async () => {
    try {
        connectDB(uri);
        await fastify.listen({port}, (err) => {
            if (err) {
                console.error(err);
            }
        });
        console.log(`Server running in port: ${port}`)
    } 
    catch (err) {
        fastify.log.error(err);
    }
}

startServer();
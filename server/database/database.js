import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connectDB = (uri) => {
    mongoose.connect(uri)
    .then(() => console.log('Conectando a BD'))
    .catch((e) => console.log('Error: ' + e))
}
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
export const connectDB = (uri) => {
    mongoose.connect(uri)
        .then(() => console.log('Connected to MondoDB'))
        .catch((e) => console.log('Error: ' + e));
};

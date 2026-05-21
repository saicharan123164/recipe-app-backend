import mongoose from "mongoose";

const connectDataBase = async () => {

    try {

        await mongoose.connect(process.env.DB_URL);

        console.log("MongoDB Connected Successfully");

    } catch (err) {

        console.log("Database Connection Error");

        console.log(err);

        process.exit(1);
    }
};

export default connectDataBase;
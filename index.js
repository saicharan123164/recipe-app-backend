import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDataBase from "./dbconnection.js";

import userRoute from "./routes/userRoute.js";
import receipeRoute from "./routes/receipeRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

connectDataBase();

app.get("/", (req, res) => {
    res.json({
        message: "Recipe API Running Successfully 🚀"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK"
    });
});

app.use("/users", userRoute);
app.use("/receipes", receipeRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
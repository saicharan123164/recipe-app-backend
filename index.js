import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDataBase from "./dbconnection.js";

import userRoute from "./routes/userRoute.js";
import receipeRoute from "./routes/receipeRoute.js";

dotenv.config();

connectDataBase();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", userRoute);

app.use("/receipes", receipeRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);
});
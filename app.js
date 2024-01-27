import express from "express";
import cors from "cors";
import config from "./utils/config.js";
import mongoose from "mongoose";
import teacherRouter from "./routes/teacherRouter.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();

const connectToDatabase = async () => {
  await mongoose.connect(config.MONGODB, console.log("Connected to database"));
};
connectToDatabase();

app.use(express.json());
app.use(cors());
<<<<<<< HEAD
app.use(express.static("dist"));
=======

>>>>>>> 53579e1d9058cf89b44be2b0ad8cbb6f683ac3f6
app.use("/api/teachers", teacherRouter);
app.use("/api/teachers/login", loginRouter);
export default app;

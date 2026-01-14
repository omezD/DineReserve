import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.resolve("config/config.env"),
});



import cors from "cors";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD AGAIN"
})})


app.use(errorMiddleware);

export default app;
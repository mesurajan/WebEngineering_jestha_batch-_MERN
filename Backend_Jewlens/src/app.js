import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env.config.js";
import { indexRouter } from "./routers/index.js";

export const app = express();

app.use(
  cors({
    origin: [env.CLIENT_URL, "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to Jewlens API" });
});

app.use("/api", indexRouter);

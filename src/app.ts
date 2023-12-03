import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { AppError } from "src/utils";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());
app.use(helmet());
app.use(cors());
app.use(morgan("short"));

app.get("/", (_req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use((_req, _res, next) => {
  next(new AppError("Path Not Found", 404));
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(err.statusCode ?? 500).json({
    status: err.isOperational ? "fail" : "error",
    message: err.isOperational ? err.message : "Something went wrong",
  });
});

export default app;

require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import path from "path";
import userRouter from "./routes/user.route";
import bookRouter from "./routes/books.route";

// body parser
app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());
app.use(cors());
app.use("/", express.static(path.join(__dirname, "public")));
app.use(
  "/public/userImg",
  express.static(path.join(__dirname, "public/userImg"))
);

// routes
app.use("/", require("./routes/root"));
app.use("/api/v1", userRouter);
app.use("/api/v1/book", bookRouter);


// testing api
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Api is working",
  });
});

// unknown routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleware);
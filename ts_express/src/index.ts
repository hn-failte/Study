import express, { Application, Request, Response, NextFunction } from "express";
import IndexRouter from "./routers/IndexRouter";
import LoginRouter from "./routers/LoginRouter";

const app: Application = express();
const port: number = 10086;

app.use("/", IndexRouter);

app.use("/login", LoginRouter);

app.listen(port, (): void => {
  console.log("run on http://localhost:" + port);
});

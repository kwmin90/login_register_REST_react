import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import "dotenv/config";
import cookieParser from "cookie-parser";
import expressJwt from "express-jwt";
import * as fs from "fs";

import { register } from "./routes/register.route";
import { login } from "./routes/login.route";
import { user } from "./routes/user.route";

const app = express();

const RSA_PUBLIC_KEY = fs.readFileSync("./public.key");
const checkIfAuth = expressJwt({
  secret: RSA_PUBLIC_KEY,
  algorithms: ["RS256"],
  getToken: (req) => req.cookies.token,
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect(`${process.env.MONGODB_CONNECTION}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;

connection.on("error", () => {
  console.log("connection error");
});
connection.once("open", () => {
  console.log("MongoDB connection established");
});

app.route("/api/register").post(register);
app.route("/api/login").post(login);
app.route("/api/user").get(checkIfAuth, user);
app.listen(4000, () => {
  console.log("express server started");
});

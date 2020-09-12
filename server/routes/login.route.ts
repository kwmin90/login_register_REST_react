import { compare } from "bcrypt";
import { Request, Response } from "express";
import { User } from "../models/user";
import * as fs from "fs";
import { sign } from "jsonwebtoken";

const RSA_PRIVATE_KEY = fs.readFileSync("./private.key");

export const login = async (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).send("Incorrect email or password");
  const valid = await compare(password, user.password);
  if (!valid) return res.status(400).send("Incorrect email or password");

  const jwtBearerToken = sign({ userId: user.id }, RSA_PRIVATE_KEY, {
    algorithm: "RS256",
    expiresIn: "15m",
  });
  res.cookie("token", jwtBearerToken, {
    httpOnly: true,
  });
  return res.status(200).json({
    idToken: jwtBearerToken,
    email: user.email,
  });
};

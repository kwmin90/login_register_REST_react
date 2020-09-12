import { Request, Response } from "express";
import { verify } from "jsonwebtoken";
import * as fs from "fs";
import { User } from "../models/user";

const RSA_PUBLIC_KEY = fs.readFileSync("./public.key");

export const user = async (req: Request, res: Response) => {
  const token = req.cookies.token;

  if (token) {
    const payload: any = verify(token, RSA_PUBLIC_KEY);
    try {
      const user = await User.findOne({ _id: payload.userId });

      if (!user) return null;
      const data = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      };
      return res.status(200).json({ data });
    } catch (err) {
      console.log(err);
      return null;
    }
  }
  return null;
};

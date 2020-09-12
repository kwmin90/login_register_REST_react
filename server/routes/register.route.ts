import { Request, Response } from "express";
import { User } from "../models/user";
import { hash, genSalt } from "bcrypt";

export const register = async (req: Request, res: Response) => {
  const request = req.body;
  const salt = await genSalt(10);
  const user = new User({
    firstName: request.firstName,
    lastName: request.lastName,
    email: request.email,
    password: await hash(request.password, salt),
  });

  await user
    .save()
    .then(() => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

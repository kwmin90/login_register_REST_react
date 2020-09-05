import { Request, Response } from "express";
import { User } from "../models/user";
import { hash } from "bcrypt";

export async function register(req: Request, res: Response) {
  const request = req.body;

  const user = new User({
    firstName: request.firstName,
    lastName: request.lastName,
    email: request.email,
    password: await hash(request.password, 12),
  });

  await user
    .save()
    .then(() => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
}

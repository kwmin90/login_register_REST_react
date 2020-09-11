import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface props extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const User = mongoose.model<props>(
  "User",
  new Schema({
    firstName: {
      type: String,
      required: true,
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: 7,
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
    },
  })
);

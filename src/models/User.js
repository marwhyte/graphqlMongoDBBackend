import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    collection: "user",
  }
);

export const User = mongoose.model("user", Schema);

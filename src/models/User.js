import mongoose from "mongoose";

export const User = mongoose.model("user", {
  username: String,
  password: String,
});

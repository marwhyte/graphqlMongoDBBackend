import mongoose from "mongoose";

export const Cat = mongoose.model("cat", { name: String });

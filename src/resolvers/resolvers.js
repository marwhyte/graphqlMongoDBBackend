import { Cat } from "../models/Cat";
import { User } from "../models/User";
import * as bcrypt from "bcryptjs";
import { tokenMaker } from "../authentication";

export const resolvers = {
  Query: { hello: () => "hi" },
  Mutation: {
    register: async (_, { username, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username: username,
        password: hashedPassword,
      });
      const userExists = await User.findOne({ username: username });
      console.log(userExists);
      if (userExists) {
        return false;
      }
      await newUser.save();

      return true;
    },
    login: async (_, { username, password }, { res }) => {
      const user = await User.findOne({ username: username });

      if (!user) {
        return null;
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return null;
      }

      const { accessToken, refreshToken } = tokenMaker(user);

      res.cookie("refresh-token", refreshToken);
      res.cookie("access-token", accessToken);

      return user;
    },
    correctToken: async (_, __, { req }) => {
      if (!req.userID) {
        return false;
      }

      const user = await User.findOne(req.userID);
      if (!user) {
        return false;
      }

      return true;
    },
  },
};

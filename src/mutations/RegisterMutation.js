import { userType } from "../types/nodeInterfaceType";
import * as bcrypt from "bcryptjs";

import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import UserClass from "../userActions";

export const CreateUser = {
  type: userType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (_, { username, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userClass = new UserClass();
    const userExists = await userClass.getUserByUsername(username);
    if (userExists !== null) {
      return null;
    } else {
      const newUser = await userClass.createUser(username, hashedPassword);
      return newUser;
    }
  },
};

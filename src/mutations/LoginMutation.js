import { userType } from "../types/nodeInterfaceType";
import * as bcrypt from "bcryptjs";
import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import UserClass from "../userActions";

export const LoginUser = {
  type: userType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve: async (_, { username, password }) => {
    const userClass = new UserClass();
    const userExists = await userClass.getUserByUsername(username);

    if (userExists === null) {
      return null;
    }
    const valid = await bcrypt.compare(password, userExists.password);
    if (!valid) {
      return null;
    }
    return userExists;
  },
};

import { userType } from "../types/nodeInterfaceType";

import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import UserClass from "../userActions";

export const CreateUser = {
  type: userType,
  args: {
    name: { type: GraphQLString },
  },
  resolve: async (_, { name }) => {
    const userClass = new UserClass();
    const userExists = await userClass.getUserByName(name);
    if (userExists !== null) {
      return null;
    } else {
      const newUser = await userClass.createUser({ name });
      return newUser;
    }
  },
};

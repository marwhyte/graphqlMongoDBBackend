import { userType } from "../types/nodeInterfaceType";

import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import UserClass from "../userActions";

export const AddProperty = {
  type: GraphQLBoolean,
  args: {
    username: { type: GraphQLString },
    newProperty: { type: GraphQLString },
  },
  resolve: async (_, { username, newProperty }) => {
    const userClass = new UserClass();
    const res = await userClass.addProperty(username, newProperty);
    if (res.modifiedCount) {
      return true;
    } else {
      return false;
    }
  },
};

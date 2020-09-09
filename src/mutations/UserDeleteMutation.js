import userType from "../types/nodeInterfaceType";

import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import UserClass from "../userActions";

export const DeleteUser = {
  type: GraphQLBoolean,
  args: {
    _id: { type: GraphQLID },
  },
  resolve: async (_, { _id }) => {
    const userClass = new UserClass();
    const res = await userClass.deleteUser(_id);

    if (res.ok) {
      return true;
    } else {
      return false;
    }
  },
};

import { userType } from "../types/nodeInterfaceType";

import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import UserClass from "../userActions";

export const AddProperty = {
  type: GraphQLBoolean,
  args: {
    name: { type: GraphQLString },
    newProperty: { type: GraphQLString },
  },
  resolve: async (_, { name, newProperty }) => {
    const userClass = new UserClass();
    console.log(name, newProperty);
    const res = await userClass.addProperty(name, newProperty);
    console.log(res);
    if (res.ok) {
      return true;
    } else {
      return false;
    }
  },
};

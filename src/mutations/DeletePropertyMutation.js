import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import PropertyClass from "../propertyActions";
import { propertyType } from "../types/nodeInterfaceType";
import UserClass from "../userActions";
export const DeleteProperty = {
  type: GraphQLBoolean,
  args: {
    _id: { type: GraphQLID },
  },
  resolve: async (_, { _id }) => {
    const propertyClass = new PropertyClass();
    const res = await propertyClass.deleteProperty(_id);
    console.log(res);
    if (res.value) {
      return true;
    } else {
      return false;
    }
  },
};

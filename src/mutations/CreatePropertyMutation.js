import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import PropertyClass from "../propertyActions";
import { propertyType } from "../types/nodeInterfaceType";
export const CreateProperty = {
  type: propertyType,
  args: {
    username: { type: GraphQLString },
    newProperty: { type: GraphQLString },
  },
  resolve: async (_, { username, newProperty }) => {
    const propertyClass = new PropertyClass();
    const res = await propertyClass.createProperty(username, newProperty);
    return res;
  },
};

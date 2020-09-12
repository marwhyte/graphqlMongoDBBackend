import UserClass from "../userActions";
import { GraphQLString, GraphQLList } from "graphql";
import PropertyClass from "../propertyActions";
import { propertyType } from "../types/nodeInterfaceType";
export const GetAllProperties = {
  type: new GraphQLList(propertyType),
  args: {},
  resolve: async (_) => {
    const propertyClass = new PropertyClass();
    const properties = propertyClass.getAllProperties();

    return properties;
  },
};

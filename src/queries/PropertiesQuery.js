import UserClass from "../userActions";
import { GraphQLString, GraphQLList } from "graphql";
import PropertyClass from "../propertyActions";
export const GetUserProperties = {
  type: new GraphQLList(GraphQLString),
  args: {
    username: { type: GraphQLString },
  },
  resolve: async (_, { username }) => {
    const propertyClass = new PropertyClass();
    const properties = propertyClass.getAllProperties();

    return properties;
  },
};

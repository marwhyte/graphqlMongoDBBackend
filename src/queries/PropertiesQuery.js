import UserClass from "../userActions";
import { GraphQLString, GraphQLList } from "graphql";

export const GetUserProperties = {
  type: new GraphQLList(GraphQLString),
  args: {
    name: { type: GraphQLString },
  },
  resolve: async (_, { name }) => {
    const userClass = new UserClass();
    const user = await userClass.getUserByName(name);

    return user.myProperties;
  },
};

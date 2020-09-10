import UserClass from "../userActions";
import { GraphQLString, GraphQLList } from "graphql";

export const GetUserProperties = {
  type: new GraphQLList(GraphQLString),
  args: {
    username: { type: GraphQLString },
  },
  resolve: async (_, { username }) => {
    const userClass = new UserClass();
    const user = await userClass.getUserByUsername(username);

    return user.myProperties;
  },
};

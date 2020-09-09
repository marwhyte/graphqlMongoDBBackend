import { userType } from "../types/nodeInterfaceType";
import UserClass from "../userActions";
import { GraphQLString, GraphQLList } from "graphql";
export const UserQuery = {
  type: userType,
  args: {
    _id: { type: GraphQLString },
  },
  resolve: async (_, { _id }) => {
    const userClass = new UserClass();
    const user = await userClass.getUserById({ _id });

    return user;
  },
};

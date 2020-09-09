import { userType } from "../types/nodeInterfaceType";

export const UserQuery = {
  type: userType,
  args: {
    _id: { type: GraphQLString },
  },
  resolve: async (_, { _id }) => {
    const userService = new UserService();
    const user = await userService.getUserById({ _id });

    return user;
  },
};

export const usersQuery = {
  type: GraphQLList(userType),
  args: {},
  resolve: async () => {
    const userService = new UserService();
    const users = await userService.getAllUsers();

    return users;
  },
};

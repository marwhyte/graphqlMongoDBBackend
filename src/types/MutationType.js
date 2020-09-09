import { GraphQLObjectType } from "graphql";
import { CreateUser } from "../mutations/UserCreateMutation";
import { DeleteUser } from "../mutations/UserDeleteMutation";

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "All the Mutations",
  fields: () => ({
    createUser: CreateUser,
    deleteUser: DeleteUser,
  }),
});

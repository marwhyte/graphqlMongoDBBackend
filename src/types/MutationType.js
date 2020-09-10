import { GraphQLObjectType } from "graphql";
import { CreateUser } from "../mutations/RegisterMutation";
import { DeleteUser } from "../mutations/UserDeleteMutation";
import { AddProperty } from "../mutations/AddPropertyMutation";
import { LoginUser } from "../mutations/LoginMutation";

export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "All the Mutations",
  fields: () => ({
    createUser: CreateUser,
    deleteUser: DeleteUser,
    addProperty: AddProperty,
    loginUser: LoginUser,
  }),
});

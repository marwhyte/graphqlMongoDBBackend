import { GraphQLObjectType } from "graphql";
import { CreateUser } from "../mutations/RegisterMutation";
import { DeleteUser } from "../mutations/UserDeleteMutation";
import { CreateProperty } from "../mutations/CreatePropertyMutation";
import { LoginUser } from "../mutations/LoginMutation";
import { DeleteProperty } from "../mutations/DeletePropertyMutation";
export const MutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "All the Mutations",
  fields: () => ({
    createUser: CreateUser,
    deleteUser: DeleteUser,
    createProperty: CreateProperty,
    loginUser: LoginUser,
    deleteProperty: DeleteProperty,
  }),
});

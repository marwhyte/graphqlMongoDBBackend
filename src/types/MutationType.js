import { GraphQLObjectType } from "graphql";

import Login from "../mutations/LoginMutation";
import Register from "../mutations/RegisterMutation";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    Login,
    Register,
  }),
});

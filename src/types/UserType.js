import { GraphQLObjectType, GraphQLString, GraphQLBoolean } from "graphql";
import { globalIdField } from "graphql-relay";
import { NodeInterface } from "../interface/NodeInterface";

export default new GraphQLObjectType({
  name: "User",
  description: "the user",
  fields: () => ({
    id: globalIdField("User"),
    _id: {
      type: GraphQLString,
      resolve: (user) => user._id,
    },
    username: {
      type: GraphQLString,
      resolve: (user) => user.username,
    },
  }),
});

import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const userType = new GraphQLObjectType({
  name: "User",
  fields: {
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

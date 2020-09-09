import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from "graphql";
import { UserQuery } from "../queries/UserQuery";
import { GetUserProperties } from "../queries/PropertiesQuery";
export const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "All The Queries",
  fields: () => ({
    user: UserQuery,
    userProperties: GetUserProperties,
  }),
});

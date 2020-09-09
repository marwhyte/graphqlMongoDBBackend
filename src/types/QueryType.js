import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from "graphql";
import { globalIdField, connectionArgs, fromGlobalId } from "graphql-relay";
import { NodeInterface } from "../interface/NodeInterface";

import UserType from "./UserType";
import TweetType from "./TweetType";
import { NodeField } from "../interface/NodeInterface";
import UserConnection from "../connection/UserConnection";

export default new GraphQLObjectType({
  name: "Query",
  description: "All the Queries",
  fields: () => ({
    me: {
      type: UserType,
      resolve: (_, __, { req }) => {
        if (!req.id) {
          return null;
        }

        return User.findOne({ _id: req.id });
      },
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLID),
        },
      },
      resolve: (obj, args, context) => {
        const { id } = fromGlobalId(args.id);
        return UserLoader.load(context, id);
      },
    },
  }),
});

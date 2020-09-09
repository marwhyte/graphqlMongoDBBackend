import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }
  type Query {
    hello: String!
    me: User
  }
  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String): Cat!
    register(username: String!, password: String!): Boolean!
    login(username: String!, password: String!): User
    correctToken: Boolean!
  }
`;

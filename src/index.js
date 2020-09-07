import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import "babel-polyfill";
import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import "reflect-metadata";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.listen({ port: 5000 }, () =>
  console.log(`server running at http://localhost:4000${server.graphqlPath}`)
);

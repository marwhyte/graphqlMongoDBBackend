import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./types/typeDefs";
import { resolvers } from "./resolvers/resolvers";
import "babel-polyfill";
import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import "reflect-metadata";

require("dotenv").config();

const startTheServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  server.applyMiddleware({ app });

  mongoose.connect(process.env.MY_URI, {
    useUnifiedTopology: true,
  });
  app.listen({ port: 5000 }, () =>
    console.log(`server running at http://localhost:5000${server.graphqlPath}`)
  );
};

startTheServer();

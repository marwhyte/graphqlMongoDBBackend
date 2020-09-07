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
    context: ({ req, res }) => ({ req, res }),
  });

  server.applyMiddleware({ app });
  app.use(cookieParser());
  app.use(async (req, res, next) => {
    const refreshToken = req.cookies["refresh-token"];
    const accessToken = req.cookies["access-token"];
    if (!refreshToken && !accessToken) {
      return next();
    }

    try {
      const checker = verify(accessToken, ACCESS_TOKEN_SECRET);
      req.userID = checker.userID;
      return next();
    } catch {}

    if (!refreshToken) {
      return next();
    }

    let checker;

    try {
      checker = verify(refreshToken, REFRESH_TOKEN_SECRET);
    } catch {
      return next();
    }

    const user = await User.findOne(checker.userId);
    // token has been invalidated
    if (!user) {
      return next();
    }

    const bothTokens = tokenMaker(user);

    res.cookie("refresh-token", bothTokens.refreshToken);
    res.cookie("access-token", bothTokens.accessToken);
    req.userID = user.id;

    next();
  });
  await mongoose.connect(process.env.MY_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  app.listen({ port: 5000 }, () =>
    console.log(`server running at http://localhost:5000${server.graphqlPath}`)
  );
};

startTheServer();

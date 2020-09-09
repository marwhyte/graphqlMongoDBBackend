import express from "express";
import { mongoClient } from "mongodb";
import { graphqlHTTP } from "express-graphql";
import { setupDB } from "./dbSetup";
import schema from "./schema";

require("dotenv").config();

const app = express();
setupDB((v) => console.log(v));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    pretty: true,
  })
);
app.listen({ port: 5000 }, () =>
  console.log(`server running at http://localhost:5000`)
);

// app.use(async (req, res, next) => {
//   const refreshToken = req.cookies["refresh-token"];
//   const accessToken = req.cookies["access-token"];
//   if (!refreshToken && !accessToken) {
//     return next();
//   }

//   try {
//     const checker = verify(accessToken, ACCESS_TOKEN_SECRET);
//     req.userID = checker.userID;
//     return next();
//   } catch {}

//   if (!refreshToken) {
//     return next();
//   }

//   let checker;

//   try {
//     checker = verify(refreshToken, REFRESH_TOKEN_SECRET);
//   } catch {
//     return next();
//   }

//   const user = await User.findOne(checker.userId);
//   // token has been invalidated
//   if (!user) {
//     return next();
//   }

//   const bothTokens = tokenMaker(user);

//   res.cookie("refresh-token", bothTokens.refreshToken);
//   res.cookie("access-token", bothTokens.accessToken);
//   req.userID = user.id;

//   next();
// });

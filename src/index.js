import express from "express";
import { mongoClient } from "mongodb";
import graphqlHTTP from "express-graphql";
import { setupDB } from "./dbSetup";
import schema from "./schema";
import cors from "cors";
import { printSchema } from "graphql";
require("dotenv").config();

const app = express();
setupDB((v) => console.log(v));
app.use(cors());
const port = process.env.PORT || 3000;
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  })
);
app.listen(port);

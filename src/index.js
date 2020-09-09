import express from "express";
const graphqlHTTP = require("express-graphql").graphqlHTTP;
import { setupDB } from "./dbSetup";
import { schema } from "./schema";
import cors from "cors";
import { printSchema } from "graphql";

require("dotenv").config();

const port = process.env.PORT || 3000;
const app = express();

setupDB((v) => console.log(v));

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  })
);

app.listen(port);
console.log("here");

import express from "express";
const graphqlHTTP = require("express-graphql").graphqlHTTP;
import { setupDB } from "./dbSetup";
import { schema } from "./schema";
import cors from "cors";
import zillowApi from "./zillowApi";
import { printSchemaOnRun } from "./schemaPrint";
require("dotenv").config();

const port = process.env.PORT || 3000;

const runServer = () => {
  const app = express();

  setupDB((v) => console.log(v));

  app.use(cors());

  // app.use("/zillowAddress", zillowApi);
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
      pretty: true,
    })
  );

  printSchemaOnRun(schema);

  app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
  );
};

runServer();

import fs from "fs";
import { printSchema } from "graphql";

export const printSchemaOnRun = (schema) => {
  fs.writeFile("./schema.graphql", printSchema(schema), function(err) {
    if (err) {
      return console.log("hi", err);
    }

    console.log("Schema generated");
  });
};

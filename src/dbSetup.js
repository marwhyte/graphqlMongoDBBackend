import { mongoClient } from "mongodb";

let mongoDB;

export const setupDB = (callback) => {
  const uri = process.env.MY_URI;

  mongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db("MERG-BE");

      if (err) {
        return callback(err);
      } else {
        return callback("DB OK");
      }
    }
  );
};

export const getDB = () => {
  return mongoDB;
};

import MongoClient from "mongodb";

let mongoDB;

export const setupDB = (callback) => {
  const uri = process.env.MY_URI;
  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      mongoDB = client.db("marcoDB");

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

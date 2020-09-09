import { getDB } from "../dbSetup";
import { ObjectID } from "mongodb";

export class MongoDbRepo {
  constructor(collectionName) {
    this.collection = getDB().collection(collectionName);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.collection.find({}).toArray((err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  getById(_id) {
    return new Promise((resolve, reject) => {
      this.collection.findOne({ _id: ObjectId(_id) }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
  getByName(name) {
    return new Promise((resolve, reject) => {
      this.collection.findOne({ name: name }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  updateOne(_id, opt) {
    return new Promise((resolve, reject) => {
      this.collection.findOneAndUpdate(
        { _id: ObjectId(_id) },
        { $set: opt },
        { returnOriginal: false },
        (err, data) => {
          if (err) {
            reject(err);
          }

          resolve(data.value);
        }
      );
    });
  }

  pushInto(name, newProperty) {
    return new Promise((resolve, reject) => {
      this.collection.updateOne(
        { name: name },
        { $push: { myProperties: newProperty } },
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        }
      );
    });
  }

  deleteOne(_id) {
    return new Promise((resolve, reject) => {
      this.collection.findOneAndDelete({ _id: ObjectId(_id) }, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

  create(name) {
    return new Promise((resolve, reject) => {
      console.log(name);
      this.collection.insertOne(
        { name: name, myProperties: [] },
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.ops[0]);
        }
      );
      1;
    });
  }
}

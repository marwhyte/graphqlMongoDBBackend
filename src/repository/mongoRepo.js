import { getDB } from "../dbSetup";
import { ObjectId } from "mongodb";
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

  getByUsername(username) {
    return new Promise((resolve, reject) => {
      this.collection.findOne({ username: username }, (err, data) => {
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

  pushInto(username, newProperty) {
    return new Promise((resolve, reject) => {
      this.collection.updateOne(
        { username: username },
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

  createUser(username, password) {
    return new Promise((resolve, reject) => {
      this.collection.insertOne(
        { username: username, password: password },
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.ops[0]);
        }
      );
    });
  }
  createProperty(name, numberOfRooms, createdBy) {
    return new Promise((resolve, reject) => {
      this.collection.insertOne(
        { name, numberOfRooms, createdBy },
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data.ops[0]);
        }
      );
    });
  }
}

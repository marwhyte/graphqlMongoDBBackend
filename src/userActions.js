import { MongoDbRepo } from "./repository/mongoRepo";

export default class UserClass {
  constructor() {
    this.UserRepository = new MongoDbRepo("users");
  }

  getUserById(id) {
    return this.UserRepository.getById(id);
  }
  getUserByName(name) {
    return this.UserRepository.getByName(name);
  }
  deleteUser(_id) {
    return this.UserRepository.deleteOne(_id);
  }
  addProperty(name, newProperty) {
    return this.UserRepository.pushInto(name, newProperty);
  }

  createUser(name) {
    return this.UserRepository.create(name);
  }
}

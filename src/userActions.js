import { MongoDbRepo } from "./repository/mongoRepo";

export default class UserClass {
  constructor() {
    this.UserRepository = new MongoDbRepo("users");
  }

  getUserById(id) {
    return this.UserRepository.getById(id);
  }
  getUserByUsername(username) {
    return this.UserRepository.getByUsername(username);
  }
  deleteUser(_id) {
    return this.UserRepository.deleteOne(_id);
  }

  createUser(username, password) {
    return this.UserRepository.createUser(username, password);
  }
}

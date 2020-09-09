import MongoDbRepo from "./repository/mongoRepo";

export class UserService {
  constructor() {
    this.UserRepository = new MongoDbRepo("Users");
  }

  getUserById(id) {
    return this.UserRepository.geById(id);
  }

  deleteUser(_id) {
    return this.UserRepository.deleteOne(_id);
  }

  createUser(opt) {
    return this.UserRepository.create(opt);
  }
}

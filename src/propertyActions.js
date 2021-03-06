import { MongoDbRepo } from "./repository/mongoRepo";

export default class propertyClass {
  constructor() {
    this.propertyRepository = new MongoDbRepo("properties");
  }

  getPropertyById(id) {
    return this.propertyRepository.getById(id);
  }
  getPropertyByName(name) {
    return this.propertyRepository.getByUsername(name);
  }
  getAllProperties() {
    return this.propertyRepository.getAll();
  }
  deleteProperty(_id) {
    return this.propertyRepository.deleteOne(_id);
  }

  createProperty(name, numberOfRooms, createdBy) {
    return this.propertyRepository.createProperty(
      name,
      numberOfRooms,
      createdBy
    );
  }
}

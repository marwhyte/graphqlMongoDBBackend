import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import PropertyClass from "../propertyActions";
import { propertyType } from "../types/nodeInterfaceType";
import UserClass from "../userActions";
import { ObjectId } from "mongodb";

export const DeleteProperty = {
  type: GraphQLBoolean,
  args: {
    _id: { type: GraphQLID },
    userID: { type: GraphQLString },
  },
  resolve: async (_, { _id, userID }) => {
    // compare

    const propertyClass = new PropertyClass();
    const userClass = new UserClass();

    const propertyCreator = await propertyClass.getPropertyById(_id);
    const currUser = await userClass.getUserById(userID);

    console.log("property", propertyCreator.createdBy);
    console.log("user", currUser.username);

    if (propertyCreator.createdBy === currUser.username) {
      const res = await propertyClass.deleteProperty(_id);
      if (res.value) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  },
};

import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import PropertyClass from "../propertyActions";
import { propertyType } from "../types/nodeInterfaceType";
import UserClass from "../userActions";
export const DeleteProperty = {
  type: GraphQLBoolean,
  args: {
    _id: { type: GraphQLID },
    userID: { type: GraphQLString },
  },
  resolve: async (_, { _id, userID }) => {
    const propertyClass = new PropertyClass();
    const userClass = new UserClass();

    const currUser = await userClass.getUserById(userID);
    console.log(currUser);
    if (currUser && currUser._id === userID) {
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

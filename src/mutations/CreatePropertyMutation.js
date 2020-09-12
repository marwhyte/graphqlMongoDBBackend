import { GraphQLString, GraphQLBoolean, GraphQLInt, GraphQLID } from "graphql";
import PropertyClass from "../propertyActions";
import { propertyType } from "../types/nodeInterfaceType";
import UserClass from "../userActions";
export const CreateProperty = {
  type: propertyType,
  args: {
    name: { type: GraphQLString },
    numberOfRooms: { type: GraphQLString },
    createdBy: { type: GraphQLString },
  },
  resolve: async (_, { name, numberOfRooms, createdBy }) => {
    const propertyClass = new PropertyClass();
    const userClass = new UserClass();

    const userExists = await userClass.getUserByUsername(username);
    if (userExists) {
      const res = await propertyClass.createProperty(
        name,
        numberOfRooms,
        createdBy
      );
      return res;
    } else {
      return null;
    }
  },
};

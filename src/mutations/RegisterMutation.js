import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { User } from "../models/User";
import * as bcrypt from "bcryptjs";
import { tokenMaker } from "../authentication";

export default mutationWithClientMutationId({
  name: "Register",
  inputFields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ username, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      password: hashedPassword,
    });
    const userExists = await User.findOne({ username: username });
    console.log(userExists);
    if (userExists) {
      return false;
    }
    await newUser.save();

    return true;
  },
});

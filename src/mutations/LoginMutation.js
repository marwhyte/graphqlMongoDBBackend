import { GraphQLString, GraphQLNonNull } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import { User } from "../models/User";
import * as bcrypt from "bcryptjs";
import { tokenMaker } from "../authentication";

export default mutationWithClientMutationId({
  name: "Login",
  inputFields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ username, password }) => {
    const user = await User.findOne({ username: username });

    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return null;
    }

    const { accessToken, refreshToken } = tokenMaker(user);

    res.cookie("refresh-token", refreshToken);
    res.cookie("access-token", accessToken);

    return user;
  },
  outputFields: {
    id: {
      type: GraphQLString,
    },
    username: {
      type: GraphQLString,
    },
  },
});

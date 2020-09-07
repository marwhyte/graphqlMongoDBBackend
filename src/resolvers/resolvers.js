import { Cat } from "../models/Cat";

export const resolvers = {
  Query: { hello: () => "hi" },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitten = new Cat({ name });
      await kitten.save();
      console.log(kitten);
      return kitten;
    },
  },
};

import DataLoader from "dataloader";
import { User as ourModel } from "../models/User";
import {
  connectionFromMongoCursor,
  mongooseLoader,
} from "@entria/graphql-mongoose-loader";

export default class User {
  constructor(data, { user }) {
    this.id = data.id;
    this._id = data._id;
    this.username = data.username;
    // you can only see your own email, and your active status
    if (user && user._id.equals(data._id)) {
      this.active = data.active;
    }
  }
}

export const getLoader = () =>
  new DataLoader((ids) => mongooseLoader(ourModel, ids));

const viewerCanSee = (viewer, data) =>
  // Anyone can see another user
  true;
export const load = async (context, id) => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.dataloaders.UserLoader.load(id);
  } catch (err) {
    return null;
  }
  return viewerCanSee(context, data) ? new User(data, context) : null;
};

export const clearCache = ({ dataloaders }, id) =>
  dataloaders.UserLoader.clear(id.toString());

export const loadUsers = async (context, args) => {
  const where = args.search
    ? { name: { $regex: new RegExp(`^${args.search}`, "ig") } }
    : {};
  const users = ourModel.find(where, { _id: 1 }).sort({ createdAt: -1 });

  return connectionFromMongoCursor({
    cursor: users,
    context,
    args,
    loader: load,
  });
};

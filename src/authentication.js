import { sign } from "jsonwebtoken";

export const tokenMaker = (user) => {
  const refreshToken = sign(
    { userID: user.id, count: user.count },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
  const accessToken = sign(
    { userID: user.id },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15min",
    }
  );

  return { refreshToken, accessToken };
};

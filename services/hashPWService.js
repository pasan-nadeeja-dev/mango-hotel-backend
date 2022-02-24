import bcrypt from "bcryptjs";

export const hashPw = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

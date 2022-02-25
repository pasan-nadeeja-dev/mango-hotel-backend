import bcrypt from "bcryptjs";

import { saveUser, findUserByEmail } from "./model";
import { hashPw } from "../../services/hashPWService";
import genToken from "../../services/tokenService";

// create new user
export const createUser = (obj) => {
  return new Promise(async (resolve, reject) => {
    // check user is already exist
    const existUser = await findUserByEmail(obj.email);
    // if there is no data found
    if (
      existUser === null ||
      existUser === undefined ||
      existUser.length === 0
    ) {
      // hash the password
      obj["password"] = hashPw(obj.password);
      // then save user.
      const newUser = await saveUser(obj);
      resolve(newUser);
    }
    // if there is a user then return custom error
    else reject("User already exist with given email");
  });
};

// sign in user
export const signUser = (obj) => {
  return new Promise(async (resolve, reject) => {
    // check does user exist by email
    const existUser = await findUserByEmail(obj.username);
    // if not found, then reject
    if (existUser === undefined || existUser === null || existUser.length === 0)
      reject("User not found");
    // if password not match, then reject
    else if (!bcrypt.compareSync(obj.password, existUser.password))
      reject("Incorrect password");
    // otherwise create token
    else resolve(genToken(existUser).token);
  });
};

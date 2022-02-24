import { saveUser, findUserByEmail } from "./model";
import { hashPw } from "../../services/hashPWService";

// create new user
export const createUser = (obj) => {
  return new Promise(async (resolve, reject) => {
    // check user is already exist
    const existUser = await findUserByEmail(obj.email);
    // if there is no data found
    if (existUser == null || existUser == undefined || existUser.length == 0) {
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

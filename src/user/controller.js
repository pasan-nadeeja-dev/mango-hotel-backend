import { createUser, signUser } from "./service";
import response from "../../services/responseService";

// Signup user
export const signupUser = async (req, res) => {
  try {
    const output = await createUser(req.body);
    return response.successWithData(output, res);
  } catch (error) {
    return response.errorWithMessage(error, res);
  }
};

// Signin user
export const signinUser = async (req, res) => {
  try {
    const token = await signUser(req.body);
    return response.successWithToken(token, res);
  } catch (error) {
    return response.errorWithMessage(error, res);
  }
};

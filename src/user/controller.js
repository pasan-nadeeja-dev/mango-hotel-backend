import { createUser } from "./service";
import response from "../../services/responseService";

// Register user
export const registerUser = async (req, res) => {
  try {
    const output = await createUser(req.body);
    return response.successWithData(output, res);
  } catch (error) {
    return response.errorWithData(error, res);
  }
};
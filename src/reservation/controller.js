import {
  addReservation as addReservService,
  cancelReservation as cancelReservService,
} from "./service";
import response from "../../services/responseService";

// add reservation
export const addReservation = async (req, res) => {
  try {
    const output = await addReservService(req.body, res.locals.userId);
    return response.successWithData(output, res);
  } catch (error) {
    return response.errorWithMessage(error, res);
  }
};

// cancel reservation
export const cancelReservation = async (req, res) => {
  try {
    const output = await cancelReservService(req.body, res.locals.userId);
    return response.successWithData(output, res);
  } catch (error) {
    return response.errorWithMessage(error, res);
  }
};

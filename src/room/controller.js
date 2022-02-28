import {
  listRooms as listRoomsService,
  addRoom as addRoomService,
} from "./service";
import response from "../../services/responseService";

// list room
export const addRoom = async (req, res) => {
  try {
    const output = await addRoomService(req.body);
    return response.successWithData(output, res);
  } catch (error) {
    return response.errorWithMessage(error, res);
  }
};

// list room
export const listRooms = async (req, res) => {
  try {
    const output = await listRoomsService(req.query);
    return response.successWithData(output, res);
  } catch (error) {
    return response.errorWithMessage(error, res);
  }
};

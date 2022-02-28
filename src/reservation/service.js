import {
  addReservation as addResModel,
  findReservByUserAndRoom as findExistRes,
} from "./model";
import { updateOnAddReservation as updateRoomRecord } from "../room/model";

// add reservation
export const addReservation = (obj, userId) => {
  return new Promise(async (resolve, reject) => {
    // otherwise make reservation
    const newReservation = await addResModel({
      ...obj,
      reservedUserId: userId,
    });
    // if there is no data found
    if (
      newReservation === null ||
      newReservation === undefined ||
      newReservation.length === 0
    ) {
      // reject with error
      return reject("Error occurred on making reservation");
    }
    // update room availability
    const updateRoom = await updateRoomRecord({
      ...obj,
      reservedUserId: userId,
      reservationId: newReservation._id,
    });
    // if there is no data found
    if (
      updateRoom === null ||
      updateRoom === undefined ||
      updateRoom.length === 0
    ) {
      // reject with error
      return reject("Error occurred on updating room status");
    }
    return resolve("Reservation successfull");
  });
};

// cancel reservation
export const cancelReservation = (obj, userId) => {
  return new Promise(async (resolve, reject) => {
    // check resevation exist
    const existRes = await findExistRes(obj.reservedRoomId, userId);
    if (existRes === null && existRes === undefined && existRes.length === 0) {
      return reject("No reservation found");
    }
  });
};

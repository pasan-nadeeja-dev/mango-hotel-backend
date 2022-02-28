import { addRoom as addRoomModel, findAllRooms as findAllModel } from "./model";

// add room
export const addRoom = (obj) => {
  return new Promise(async (resolve, reject) => {
    // check room is already exist
    const room = await addRoomModel(obj);
    // if there is no data found
    if (room === null || room === undefined || room.length === 0) {
      // reject with error
      reject("Error occureed");
    }
    // if there is a room then return custom error
    else resolve(room);
  });
};

// list all rooms
export const listRooms = (obj) => {
  return new Promise(async (resolve, reject) => {
    // check room is already exist
    const rooms = await findAllModel(obj);
    // if there is no data found
    if (rooms === null || rooms === undefined || rooms.length === 0) {
      // reject with error
      reject("No rooms found");
    }
    // if there is a room then return custom error
    else resolve(rooms);
  });
};
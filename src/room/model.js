import { Schema, model } from "mongoose";

//create schema
const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  view: {
    type: String,
    required: true,
    trim: true,
  },
  amentities: {
    type: Array,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
  rates: {
    type: Object,
    required: true,
  },
  reservedBy: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

// create model
const roomModel = model("Room", roomSchema);

// save room object
export const addRoom = async (obj) => {
  const newModel = new roomModel(obj);
  return await newModel.save();
};

// find all available rooms
export const findAllRooms = async ({ checkIn, checkOut }) => {
  return await roomModel
    .find({
      "reservedBy.checkIn": { $ne: checkIn },
      "reservedBy.checkOut": { $ne: checkOut },
    })
    .exec();
};

// update room
export const updateOnAddReservation = async ({
  reservedRoomId,
  checkIn,
  checkOut,
  reservedUserId,
  reservationId,
}) => {
  const room = await roomModel.findById(reservedRoomId);
  return await roomModel
    .findByIdAndUpdate(room._id, {
      availability: false,
      $push: {
        reservedBy: {
          userId: reservedUserId,
          reservationId: reservationId,
          checkIn: checkIn,
          checkOut: checkOut,
        },
      },
    })
    .exec();
};

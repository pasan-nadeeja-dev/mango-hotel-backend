import { Schema, model } from "mongoose";

//create schema
const reservSchema = new Schema({
  isActive: {
    type: Boolean,
    required: true,
  },
  reservedUserId: {
    type: Schema.Types.ObjectId,
  },
  reservedRoomId: {
    type: Schema.Types.ObjectId,
  },
  checkIn: {
    type: String,
    required: true,
  },
  checkOut: {
    type: String,
    required: true,
  },
  nights: {
    type: Number,
    required: true,
  },
  mealType: {
    type: String,
    required: true,
  },
  nuOfGuests: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  other: {
    type: Object,
  },
  paymentType: {
    type: String,
    required: true,
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
const reservModel = model("Reservation", reservSchema);

// save reservation object
export const addReservation = async (obj) => {
  const newModel = new reservModel(obj);
  return await newModel.save();
};

// find reservation
export const findReservByUserAndRoom = async (roomId, userId) => {
  return await reservModel
    .find({ reservedRoomId: roomId, reservedUserId: userId })
    .exec();
};

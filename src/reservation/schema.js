import joi from "joi";

// make reservation
export const addReservation = joi.object().keys({
  isActive: joi.boolean().required(),
  reservedUserId: joi.string().required(),
  reservedRoomId: joi.string().required(),
  checkIn: joi.string().required(),
  checkOut: joi.string().required(),
  nights: joi.number().required(),
  mealType: joi.string().required(),
  nuOfGuests: joi.string().required(),
  price: joi.string().required(),
  other: joi.string(),
  paymentType: joi.string().required(),
});

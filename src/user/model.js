import mongoose from "mongoose";

//create schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
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
const model = mongoose.model("User", userSchema);

// save user object
export const saveUser = async (obj) => {
  const newModel = new model(obj);
  return await newModel.save();
};

// find user object by email
export const findUserByEmail = async (email) => {
  return await model.findOne({ email: email }).exec();
};

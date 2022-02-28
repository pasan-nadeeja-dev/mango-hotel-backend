import express from "express";

// validators
import { validateBody, validateHeader } from "../validators/validator";

// controllers
import { signupUser, signinUser } from "../src/user/controller";
import { addRoom, listRooms } from "../src/room/controller";
import {
  addReservation,
  cancelReservation,
} from "../src/reservation/controller";

// validator schemas
import { signupSchema, signInSchema } from "../src/user/schema";

// init router
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.use(express.json());

router.route("/api/user/signup").post(validateBody(signupSchema), signupUser);

router.route("/api/user/signin").post(validateBody(signInSchema), signinUser);

router.route("/api/room/list-all").get(listRooms);

router.route("/api/room/add").post(addRoom);

router.route("/api/reservation/add").post(validateHeader(), addReservation);

router
  .route("/api/reservation/cancel")
  .post(validateHeader(), cancelReservation);

export default router;

import express from "express";

// validator
import { validateBody } from "../validators/validator";

// controllers
import { signupUser, signinUser } from "../src/user/controller";

// validator schemas
import { signupSchema, signInSchema } from "../src/user/schema";

// init router
const router = express.Router();

router.route("/api/user/signup").post(validateBody(signupSchema), signupUser);

router.route("/api/user/signin").post(validateBody(signInSchema), signinUser);

export default router;

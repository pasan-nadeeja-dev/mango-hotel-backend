import express from "express";

// validator
import { validateBody } from "../validators/validator";

// controllers
import { registerUser } from "../src/user/controller";

// validator schemas
import { signupSchema } from "../src/user/schema";

// init router
const router = express.Router();

router.route("/api/user/signup").post(validateBody(signupSchema), registerUser);

export default router;

import joi from "joi";

export const signupSchema = joi.object().keys({
  firstName: joi.string().required().min(1).max(50),
  lastName: joi.string().required().min(1).max(50),
  email: joi
    .string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "lk"] } })
    .min(1)
    .max(50),
  password: joi.string().required().min(8).max(16),
});

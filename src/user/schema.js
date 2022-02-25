import joi from "joi";

// sign up schema
export const signupSchema = joi.object().keys({
  firstName: joi.string().required().min(1).max(50),
  lastName: joi.string().required().min(1).max(50),
  email: joi
    .string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "lk"] } })
    .max(50),
  password: joi.string().required().min(8).max(16),
});

// sign in schema
export const signInSchema = joi.object().keys({
  username: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "lk"] } })
    .max(50)
    .required(),
  password: joi.string().required().min(8).max(16),
});

import response from "../services/responseService";

// validate req body
export const validateBody = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return response.errorWithMessage(result.error.details[0].message, res);
    } else {
      next();
    }
  };
};

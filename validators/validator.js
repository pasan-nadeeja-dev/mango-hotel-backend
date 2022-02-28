import jwt from "jsonwebtoken";

import response from "../services/responseService";
import config from "../config/appConfig";

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

// validate header
export const validateHeader = () => {
  return (req, res, next) => {
    function extractToken() {
      if (
        req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
      ) {
        return req.headers.authorization.split(" ")[1];
      }
      return null;
    }

    jwt.verify(extractToken(), config.SECRET, (err, decoded) => {
      if (err) {
        return response.errorWithMessage("Invalid Token", res);
      }
      // pass data to next middleware
      res.locals.userId = decoded._id;
      next();
    });
  };
};

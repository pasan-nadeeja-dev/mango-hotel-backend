import jwt from "jsonwebtoken";

import config from "../config/appConfig";

// generate JWT token
const genToken = ({ _id: id, firstName, lastName, email }) => {
  return {
    token: jwt.sign(
      {
        _id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
      config.SECRET,
      { expiresIn: "1h" }
    ),
  };
};

export default genToken;

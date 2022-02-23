import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";

import appConfig from "../config/appConfig";

// create server instance
const server = express();
// Set constant http server port
const server_port = appConfig.WEB_PORT;
// Enable all cors
server.use(cors());
// Parse incomming request with JSON
server.use(json());

// Initiate DB connection
mongoose
  .connect(appConfig.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected!");
    return server.listen(appConfig.WEB_PORT);
  })
  .then(() => {
    console.log(`Server running on ${server_port}`);
  })
  .catch((error) => console.log(`Config error : ${error}`));

import express, { json } from "express";

import appConfig from "../config/appConfig";

// create server instance
const server = express();
// Set constant http server port
const server_port = appConfig.WEB_PORT;

server.listen(server_port, () =>
  console.log(`Server listening at port ${server_port}`)
);

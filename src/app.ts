import express from "express";
import http from "http";
import { expressStartup } from "./express-startup";

const app = express();
const server = http.createServer(app);

/**
 * creating method for express startup
 */
async function startNodeServer() {
  await expressStartup(app);
  try {
    server.listen(9000);
  } catch (err) {
    console.log("Error ir running server: ", err);
  }
}

/**
 * method called for starting up the server
 */
startNodeServer()
  .then(() => {
    console.log("Server is running on 9000");
  })
  .catch((err) => {
    console.log("Error in starting server: ", err);
  });

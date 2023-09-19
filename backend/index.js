import dotenv from "dotenv"
dotenv.config()

import Server from "./src/server/server.js";

const proyectserver = new Server()

proyectserver.listener()
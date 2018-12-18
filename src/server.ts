import * as express from "express";
import * as socket from "socket.io";
import * as morgan from "morgan";
import * as dotEnv from "dotenv";

dotEnv.config(); // set environment variables
const app = express();
app.use(morgan("dev"));

app.use(express.static("public")); // public content

// Port
const port = process.env.PORT || 8080;

// Server listening for requests
const server = app.listen(port);

const io = socket(server);
io.on("connection", (socket) => {
	console.log("someone connected!!", socket);
});




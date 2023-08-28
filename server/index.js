require("dotenv/config");
const {
  SocketServerController,
} = require("./controller/SocketServerController");

const http = require("http");
const { App } = require("./app");
const { SocketServer } = require("./socket");

const server = http.createServer(App);

new SocketServer({
  httpServer: server,
  SocketServerController: SocketServerController,
  VITE_SOCKET_PATH: process.env.VITE_SOCKET_PATH,
  VITE_SOCKET_URL: process.env.VITE_SOCKET_URL,
});

server.listen(process.env.PORT, () => {
  console.log("Server on port:" + process.env.PORT);
});

server.on("error", (err) => {
  console.log(err);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

require("dotenv/config");

const http = require("http");
const { App } = require("./app");
const { initSocket } = require("./socket");

const server = http.createServer(App);

initSocket(server);

server.listen(App.get("port"), () => {
  console.log("Server on port:" + App.get("port"));
});

server.on("error", (err) => {
  console.log(err);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

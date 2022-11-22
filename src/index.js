require("dotenv/config");

const http = require("http");
const { App } = require("./app");
const { initSocket } = require("./socket");
const server = http.createServer(App);

initSocket(server);

server.listen(App.get("port"), () => {
  console.log("Server on port:" + App.get("port"));
});

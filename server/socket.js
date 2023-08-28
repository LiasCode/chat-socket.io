const socketIO = require("socket.io");
const http = require("node:http");

class SocketServer {
  socket;
  httpServer;
  socketServerPath;
  socketServerOrigin;

  constructor({
    httpServer,
    VITE_SOCKET_PATH,
    VITE_SOCKET_URL,
    SocketServerController,
  }) {
    if (!httpServer || !(httpServer instanceof http.Server)) {
      throw new Error("httpServer missing");
    }
    this.httpServer = httpServer;
    this.socketServerPath = VITE_SOCKET_PATH;
    this.socketServerOrigin = VITE_SOCKET_URL;
    this.socket = this.initSocket();
    new SocketServerController(this.socket);
  }

  initSocket() {
    const io = new socketIO.Server(this.httpServer, {
      cors: {
        origin: this.socketServerOrigin,
        optionsSuccessStatus: 200,
      },
      path: this.socketServerPath,
    });
    return io;
  }
}

module.exports = {
  SocketServer,
};

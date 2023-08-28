const { UserModel } = require("../model/User");
const crypto = require("node:crypto");

class SocketServerController {
  users = [];

  constructor(socketServer) {
    this.initHandler(socketServer);
  }

  addUser(newUser) {
    this.users.push(newUser);
  }
  extractActiveUserSafeData(user) {
    return {
      id: user.id,
      color: user.color,
      name: user.name,
    };
  }

  removeUser({ socketId }) {
    if (!socketId) return;

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].socketId === socketId) {
        this.users.splice(i, 1);
        break;
      }
    }
  }

  initHandler(socketServer) {
    // socket
    socketServer.on("connection", (socket) => {
      console.log("New Socket connected");

      socket.on("join", (data) => {
        try {
          const newUser = new UserModel(socket.id, data.name);
          if (!newUser) throw new Error("join fail");
          this.addUser(newUser);
          socketServer.emit(
            "new_user",
            this.users.map((u) => this.extractActiveUserSafeData(u))
          );
          console.log(this.users);
        } catch (error) {
          console.log({ error });
          socket.emit("join fail", error);
        }
      });

      socket.on("chat new msg all", (msg) => {
        try {
          if (typeof String(msg) !== "string")
            throw new Error("Msg no valido -> socket.id -> " + socket.id);

          console.log({ msg, socketId: socket.id });

          const user = this.users.find((u) => u.socketId === socket.id);

          if (!user) throw new Error("Invalid User");

          socketServer.emit("chat new msg all", {
            msg,
            msgId: crypto.randomUUID(),
            name: user.name,
            id: user.id,
            color: user.color,
          });
        } catch (error) {
          console.log({ error });
        }
      });

      // close connection
      socket.on("disconnect", () => {
        console.log("user disconnected");
        this.removeUser({ socketId: socket.id });
        console.log(this.users);
        socketServer.emit(
          "new_user",
          this.users.map((u) => this.extractActiveUserSafeData(u))
        );
      });
    });
  }
}

module.exports = {
  SocketServerController,
};

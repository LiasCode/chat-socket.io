const socketIO = require("socket.io");
const crypto = require("crypto");
const { UserModel } = require("../model/User");

const activeUserSafeData = [];
const users = [];
const socketServerPath = process.env.VITE_SOCKET_PATH;

function initSocket(server) {
  const io = new socketIO.Server(server, {
    cors: {
      origin: process.env.VITE_SOCKET_URL,
      optionsSuccessStatus: 200,
    },
    path: socketServerPath,
  });

  // socket
  io.on("connection", (socket) => {
    console.log("New Socket connected");

    socket.on("join", (data) => {
      try {
        const newUser = new UserModel(socket.id, data.name);
        if (!newUser) throw new Error("join fail");
        addUser(newUser);
        io.emit("new_user", activeUserSafeData);
        console.log(activeUserSafeData);
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

        let user;

        for (let i = 0; i < activeUserSafeData.length; i++) {
          if (users[i].socketId === socket.id) {
            user = users[i];
            break;
          }
        }
        if (!user) throw new Error("Invalid User");

        console.log(`${user.name} says : ${{ msg }}`);

        io.emit("chat new msg all", {
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
      removeUser({ socketId: socket.id });
      console.log(activeUserSafeData);
      io.emit("new_user", activeUserSafeData);
    });
  });
}

function addUser(newUser) {
  users.push(newUser);
  activeUserSafeData.push({
    id: newUser.id,
    color: newUser.color,
    name: newUser.name,
  });
}

function removeUser({ socketId }) {
  if (!socketId) return;
  let currentUserId = "";

  for (let i = 0; i < users.length; i++) {
    if (users[i].socketId === socketId) {
      currentUserId = users[i].id ;
      users.splice(i, 1);
      break;
    }
  }

  for (let i = 0; i < activeUserSafeData.length; i++) {
    if (activeUserSafeData[i].id === currentUserId) {
      activeUserSafeData.splice(i, 1);
      break;
    }
  }

}

module.exports = {
  initSocket,
};

const socketIO = require("socket.io");
const crypto = require("crypto");

let usuariosActivos = [];

function initSocket(server) {
  const io = new socketIO.Server(server);

  // socket
  io.on("connection", (socket) => {
    console.log("a user connected");

    addUser({ id: socket.id, name: "user" + crypto.randomInt(1, 1000) });
    console.log(usuariosActivos);

    io.emit("new_user", usuariosActivos);

    socket.on("chat new msg all", (msg) => {
      console.log({ msg, id: socket.id });

      let user;

      for (let i = 0; i < usuariosActivos.length; i++) {
        if(usuariosActivos[i].id === socket.id) {
            user = usuariosActivos[i];
            break;
        }
      }

      io.emit("chat new msg all", {
        msg,
        name: user.name,
        id : socket.id
      });
    });

    // close connection
    socket.on("disconnect", () => {
      console.log("user disconnected");
      removeUser({ id: socket.id });
      console.log(usuariosActivos);
      io.emit("new_user", usuariosActivos);
    });
  });
}

function addUser({ id, name }) {
  usuariosActivos.push({ id, name });
}

function removeUser({ id }) {
  if (!id) return;

  for (let i = 0; i < usuariosActivos.length; i++) {
    if (usuariosActivos[i].id === id) {
      usuariosActivos.splice(i, 1);
      break;
    }
  }
}

module.exports = {
  initSocket,
};

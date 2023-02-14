const socketIO = require("socket.io");
const crypto = require("crypto");

const usuariosActivos = [];

function initSocket(server) {

  const io = new socketIO.Server(server, {
    cors: {
      origin: "*",
    },
    path: "/socket/chat",
  });

  // socket
  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("join", (data) => {
      try {
        if (!data.name) throw new Error("join fail");
        addUser({ id: socket.id, name: data.name });
        io.emit("new_user", usuariosActivos);
        console.log(usuariosActivos);
      }
      catch (error) {
        console.log({ error });
        socket.emit("join fail", error);
      }
    });

    socket.on("chat new msg all", (msg) => {
      try {
        if (typeof String(msg) !== "string")
          throw new Error("Msg no valido -> socket.id -> " + socket.id);

        console.log({ msg, id: socket.id });

        let user;

        for (let i = 0; i < usuariosActivos.length; i++) {
          if (usuariosActivos[i].id === socket.id) {
            user = usuariosActivos[i];
            break;
          }
        }
        console.log(`${user.name} says : ${{ msg }}`);

        io.emit("chat new msg all", {
          msg,
          name: user.name,
          id: socket.id,
          msgId: crypto.randomInt(1, 10000),
          color: user.color,
        });
      }
      catch (error) {
        console.log({ error });
      }
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

function createRandomColor() {
  const r = crypto.randomInt(0, 255);
  const g = crypto.randomInt(0, 255);
  const b = crypto.randomInt(0, 255);

  return { r, g, b };
}

function addUser({ id, name }) {
  usuariosActivos.push({ id, name, color: createRandomColor() });
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

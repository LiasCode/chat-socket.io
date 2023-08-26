import { io } from "socket.io-client";

const socketServerUrl = import.meta.env.VITE_SOCKET_URL;
const socketServerPath = import.meta.env.VITE_SOCKET_PATH;

const connectionOptions = {
  "force new connection": true,
  "reconnectionAttempts": "Infinity",
  "timeout": 10000,
  "transports": ["websocket"],
  "path": socketServerPath
};

export const socket = io.connect(socketServerUrl, connectionOptions);

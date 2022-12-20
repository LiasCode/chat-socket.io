import { io } from "socket.io-client";

const socketServerUrl = import.meta.env.VITE_SOCKET_URL;

const connectionOptions = {
  "force new connection": true,
  "reconnectionAttempts": "Infinity",
  "timeout": 10000,
  "transports": ["websocket"],
  "path": "/socket/chat"
};

export const socket = io.connect(socketServerUrl, connectionOptions);

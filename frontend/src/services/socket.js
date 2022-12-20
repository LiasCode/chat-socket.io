import { io } from "socket.io-client";

const socketServerUrl = import.meta.env.VITE_SOCKET_URL;

export const socket = io.connect(socketServerUrl);

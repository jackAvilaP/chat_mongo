import { Server as SocketServer } from "socket.io";

export let io = null;

export function initSocketServer(server) {
 return io = new SocketServer(server, {
    cors: {
      origin: "*",
    },
  });
}

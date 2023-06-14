import mongoose from "mongoose";
import { server } from "./app.js";
import { IP_SERVER, PORT, DB_USER, DB_PASSWORD, DB_HOST } from "./constants.js";
import { io } from "./utils/index.js";

const mongoDbUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`;
const mongoDbLocal = "mongodb://127.0.0.1:27017/chatApp";

mongoose.set('strictQuery', true)
mongoose.connect(mongoDbLocal, (error) => {
  if (error) throw error;

  server.listen(PORT, () => {
    console.log(`http://${IP_SERVER}:${PORT}/api`);

    io.sockets.on("connection", (socket) => {
      console.log("NUEVO USUARIO CONECTADO");

      socket.on("disconnect", () => {
        console.log("USUARIO DESCONECTADO");
      });

      socket.on("subscribe", (room) => {
        socket.join(room);
      });

      socket.on("unsubscribe", (room) => {
        socket.leave(room);
      });
    });
  });
});

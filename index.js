const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

let players = [];
let choices = {};

io.on("connection", (socket) => {
  console.log("Jugador conectado:", socket.id);

  if (players.length < 2) {
    players.push(socket.id);
    socket.emit("playerNumber", players.length);
  } else {
    socket.emit("full");
    return;
  }

  socket.on("choice", (choice) => {
    choices[socket.id] = choice;

    if (Object.keys(choices).length === 2) {
      const result = determineWinner();
      io.emit("result", result);
      choices = {};
    }
  });

  socket.on("disconnect", () => {
    console.log("Jugador desconectado:", socket.id);
    players = players.filter(id => id !== socket.id);
    choices = {};
  });
});

function determineWinner() {
  const [p1, p2] = players;
  const c1 = choices[p1];
  const c2 = choices[p2];

  if (c1 === c2) return "Empate";

  if (
    (c1 === "piedra" && c2 === "tijera") ||
    (c1 === "papel" && c2 === "piedra") ||
    (c1 === "tijera" && c2 === "papel")
  ) {
    return "Jugador 1 gana";
  } else {
    return "Jugador 2 gana";
  }
}

http.listen(PORT, () => {
  console.log("Servidor corriendo en puerto", PORT);
});

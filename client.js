const socket = io();

socket.on("playerNumber", (num) => {
  document.getElementById("status").innerText =
    "Eres Jugador " + num;
});

socket.on("full", () => {
  document.getElementById("status").innerText =
    "La sala está llena";
});

socket.on("result", (msg) => {
  document.getElementById("result").innerText = msg;
});

function sendChoice(choice) {
  socket.emit("choice", choice);
}

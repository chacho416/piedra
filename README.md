Piedra, Papel o Tijera - Node.js

Un juego clásico de Piedra, Papel o Tijera desarrollado en Node.js, que se ejecuta desde la terminal. El usuario juega contra la computadora en partidas individuales.

📌 Descripción

Este proyecto permite al usuario elegir entre piedra, papel o tijera desde la consola.
La computadora genera una elección aleatoria y el programa determina el ganador según las reglas tradicionales:

🪨 Piedra vence a Tijera

✂️ Tijera vence a Papel

📄 Papel vence a Piedra

🚀 Requisitos

Tener instalado Node.js (versión 14 o superior recomendada)

Puedes verificar tu versión con:

node -v
▶️ Uso

Ejecuta el juego con:

node index.js

Luego, sigue las instrucciones en pantalla para elegir:

Elige: piedra, papel o tijera
🧠 Lógica del juego

El usuario ingresa una opción.

La computadora genera una opción aleatoria.

Se comparan ambas elecciones.

Se muestra el resultado:

Empate

Gana el usuario

Gana la computadora

📁 Estructura del proyecto
piedra-papel-tijera-node/
│
├── index.js
├── package.json
└── README.md

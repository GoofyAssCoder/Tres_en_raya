/*Implementar un tres en raya para 2 jugadores:
-La entrada se hará usando la función prompt y la salida mediante alert  o console.log
-Vamos a empezar con 2 jugadores humanos. En index.html */

let tablero = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let jugadorActual = 'X';
let juegoActivo = true;

function mostrarTablero() {
    alert(`
    ${tablero[0]} | ${tablero[1]} | ${tablero[2]}
    ---------
    ${tablero[3]} | ${tablero[4]} | ${tablero[5]}
    ---------
    ${tablero[6]} | ${tablero[7]} | ${tablero[8]}
    `);
}

function verificarGanador() {
    const combinacionesGanadoras = [
        [0, 1, 2], // Filas
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // Columnas
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // Diagonales
        [2, 4, 6]
    ];

    for (let combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (tablero[a] !== ' ' && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            return true;
        }
    }
    return false;
}

function turno() {
    while (juegoActivo) {
        mostrarTablero();
        let posicion = parseInt(prompt(`Jugador ${jugadorActual}, elige una posición (1-9):`));

        if (posicion >= 1 && posicion <= 9 && tablero[posicion - 1] === ' ') { // Restar 1 para el índice correcto
            tablero[posicion - 1] = jugadorActual;

            if (verificarGanador()) {
                mostrarTablero();
                alert(`¡Jugador ${jugadorActual} ha ganado!`);
                juegoActivo = false;
                return;
            }

            if (tablero.every(celda => celda !== ' ')) {
                mostrarTablero();
                alert('¡Empate!');
                juegoActivo = false;
                return;
            }

            jugadorActual = (jugadorActual === 'X') ? 'O' : 'X';
        } else {
            alert('Posición inválida o ya ocupada, prueba de nuevo :(');
        }
    }
}

turno();

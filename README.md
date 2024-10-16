# Tres_en_raya
Una aplicación práctica de los arrays es representar un tablero bidimensional. En este ejercicio vamos a implementar un tres en raya para dos jugadores.<br> 

Dado que aún no hemos visto cómo interactuar con el usuario desde la página web o actualizar elementos del DOM, la entrada se hará usando la función prompt, y la salida mediante alert o console.log<br>
Vamos a empezar con dos jugadores humanos en esta práctica. En el index.html puedes hacer un esquema del tablero con coordenadas (vale con 1, 2, 3 ... 9) para que los usuarios puedan saber cómo se llama cada casilla. Al empezar, el tablero está vacío. Cada usuario introduce en su turno la coordenada de la casilla donde colocan la ficha (X o O).<br>
Hay que comprobar si la casilla está libre o no, si hay tres en raya, o si el tablero está lleno sin tres en raya (tablas)<br>
Piensa en qué habrá que hacer distinto en caso de que queramos programar el segundo jugador, bonus points si tu código permite añadir este código sin grandes cambios ;-) (nota: no hace falta programar el segundo jugador, sólo pensar en cómo modificar nuestro código para que, por ejemplo, lo pueda implementar otra persona)
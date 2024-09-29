# Entendiendo en que consite el juego y los componentes

El tablero del lado izquierdo pertence a la persona y este debe iniciar el posicionamiento de los 5 tipos de barcos. Los tipos de barcos y tamaños son:

Porta-Aviones= 5 casillas.

Acorazado= 4 casillas.

Destructor= 3 casillas.

Sub-Marino= 3 casillas.

Bote-Patrulla= 2 casillas.

El tablero del lado derecho pertenece a la máquina. En el se posicionan los mismo tipos de barcos que en el tablero del humano pero, automaticamente y de manera aleatoria por cada partida.

## Setup

Start the server

```bash
  npm run dev
```


## Dependencies
react: "^18.2.0"

react-dom: "^18.2.0"

react-icons: "^5.2.1"

bootstrap: "^5.3.3"


## Archivos
### App.jsx  
  Componente principal de la aplicación. Renderiza al componente Human, Machine y Messagge.
 
### Human.jsx 
  Componente padre del componente Square. Por cada valor en el estado human retorna un Square.

### Machine.jsx 
  Componente padre del componente Square. Por cada valor en el estado boardMachine retorna un Square

### Square.jsx 
  Se pasaron por props los estados del componente Human y Machine para validar acciones distintas en cada uno de los tableros. Es padre del componente Buttonsposittions. 

### ButtonsPositions.jsx
  Componente hijo del componente Square y último en el nivel del árbol. Se sobre pone cuando la persona hace click en una casilla correspondiente a su tablero para indicar el posicionamiento(vertical u horizontal).

### Messagge.jsx 
  Las acciones del juego posicionar barcos en el tablero human, disparar al tablero machine y declarar un ganador utilizan este componente con el texto correpondiente a cada acción. En tablero de la persona por cada posicionamiento de un tipo de barco renderizará el  nombre e indicando la acción.  Cuando están posicionados los 5 tipos de barcos mostrará el mensaje de iniciar disparo. Solo se puede disparar luego de posicionar los barcos. Si gana la persona o gana la máquina aparacerá el mensaje junto a un botón para jugar de nuevo. 

### Main.jsx
  Renderiza al componente principal App.

### board.js
  Contiene la función que construye el array bidimensional con la que se inicializan los estados human y boardMachine. Por cada valor en el renderiza un Square.

### index.css




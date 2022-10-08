fetch('http://localhost:8080/pasajeros.json')
.then((response) => response.json())
.then((pasajeros) => {
    const nombresDePasajeros = pasajeros.map((pasajero) => pasajero.edad);
    console.log(nombresDePasajeros); 
});

const deportista1 = {
    nombre: 'Critiano',
    champions: 4,
};
console.log(JSON.stringify(deportista1));

const deportista2 = '{"nombre":"Mesi","champions":4}'
console.log(JSON.parse(deportista2));

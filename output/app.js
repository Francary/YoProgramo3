"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let a;
let b;
let c = 80;
let recursos = ['memoria', 'disco', 'procesador'];
let message = 'Hello World Probando 3.0';
console.log(message);
let nombre = "Perla";
const mensajePractica = `Mi nombre es ${nombre} Soy nuevo en TypeScript.`;
console.log(mensajePractica);
let nombre2 = "Francary Molina";
let mensaje1 = `Mi nombre es ${nombre2} Estoy practicando TypeScript`;
console.log(mensaje1);
let cuadro = `Esto es una Prueba de Alerta que invento ${nombre2}`;
alert(cuadro);
console.error(cuadro);
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
let persona = new Persona("Luis", "Puma");
console.log(persona);
function DecoradorPersona(target) {
    console.log(target);
}
let Persona2 = class Persona2 {
    constructor() {
    }
};
Persona2 = __decorate([
    DecoradorPersona
], Persona2);
// Uso de una Super Clase 
class Operacion {
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    set ValorA(value) {
        this.valorA = value;
    }
    set ValorB(value) {
        this.valorB = value;
    }
    get Resultado() {
        return this.resultado;
    }
}
class Suma extends Operacion {
    Sumar() {
        this.resultado = this.valorA + this.valorB;
    }
}
class Resta extends Operacion {
    Restar() {
        this.resultado = this.valorA - this.valorB;
    }
}
let opercaionS = new Suma();
opercaionS.ValorA = 45;
opercaionS.ValorB = 10;
opercaionS.Sumar();
console.log("El resultado de la suma es " + opercaionS.Resultado);
alert("El resultado de la suma es " + opercaionS.Resultado);
let opercaionR = new Resta();
opercaionR.ValorA = 45;
opercaionR.ValorB = 10;
opercaionR.Restar();
console.log("El resultado de la resta es " + opercaionR.Resultado);
alert("El resultado de la resta es " + opercaionR.Resultado);
// Practica de Aereoplano
class Turbina {
    constructor(n) {
        this.numTurbinas = 0;
        this.numTurbinas = n;
    }
    ToString() {
        return this.numTurbinas + " Turbina/s";
    }
}
class Cubierta {
    constructor(pCabinaTripulacion, pCabinaVuelo, pSistemaEmergencia, pTanquesCombustible, pPuertasSalida) {
        this.cabinaTripulacion = false;
        this.cabinaVuelo = false;
        this.sistemaEmergencia = false;
        this.numTanquesCombustible = 4;
        this.numPuestasSalidas = 4;
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuestasSalidas = pPuertasSalida;
    }
    ToString() {
        let mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje += " cubierta de Vuelo, ";
        }
        if (this.cabinaTripulacion) {
            mensaje += " cubierta de Tripulación, ";
        }
        if (this.sistemaEmergencia) {
            mensaje += " Sistema de Emergencia, ";
        }
        mensaje += this.numTanquesCombustible + " Tanques de Combustible, ";
        mensaje += this.numPuestasSalidas + " Puertas de Salida. ";
        return mensaje;
    }
}
class Helice {
    constructor(n) {
        this.numHelices = 1;
        this.numHelices = n;
    }
    ToString() {
        return this.numHelices + "  Helices";
    }
}
class Alas {
    constructor(n) {
        this.numAla = 2;
        this.numAla = n;
    }
    ToString() {
        return this.numAla + "  Las Alas";
    }
}
class TrenDeAterrizaje {
    constructor(n) {
        this.numTrenAterrizaje = 3;
        this.numTrenAterrizaje = n;
    }
    ToString() {
        return this.numTrenAterrizaje + "  Los Trenes";
    }
}
class Aereoplano {
    constructor(phelice, pTrenAterrizaje, pAlas, pCubierta) {
        this.helice = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }
    ToString() {
        let mensaje = " Aeroplano compuesto por: ";
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;
    }
}
const gente = {
    nombre: 'Perla',
    edad: 33,
    direccion: {
        calle: 'San Martin ',
        pais: 'Argentina ',
        ciudad: ' Capital Federal '
    },
    mostrarDireccion() {
        return this.nombre + ' , ' + this.direccion.ciudad + ' , ' + this.direccion.pais;
    }
};
console.log(gente.mostrarDireccion());

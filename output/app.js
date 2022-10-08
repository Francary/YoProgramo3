"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let a;
let b;
let c = 25;
let recursos = ['memoria', 'disco', 'procesador'];
let message = 'Hello World Probando 3.0';
console.log(message);
let nombre = "Mateo";
const mensaje = `Mi nombre es ${nombre} Soy nuevo en TypeScript.`;
console.log(mensaje);
let nombre2 = "Francary Molina";
let mensaje1 = `Mi nombre es ${nombre2} Estoy practicando TypeScript`;
console.log(mensaje1);
let cuadro = `Esto es una Prueba de Alerta que invento ${nombre2}`;
alert(cuadro);
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

let message: string ='Hello World Probando 3.0'
console.log(message);
let nombre: string = "Mateo";
const mensaje = `Mi nombre es ${nombre} Soy nuevo en TypeScript.`;
console.log(mensaje)

let nombre2: string = "Francary Molina";
let mensaje1: string = `Mi nombre es ${nombre2} Estoy practicando TypeScript`;
console.log(mensaje1);

let cuadro: string= `Esto es una Prueba de Alerta que invento ${nombre2}`;
alert(cuadro);  

class Persona {
    nombre:string;
    apellido:string;
    edad: number;
    añoNac:Date;

    constructor(nombre:string , apellido:string){
        this.nombre = nombre;
        this.apellido = apellido;
    }
 
   }

   let persona = new Persona("Luis","Puma");
   console.log(persona);

   function DecoradorPersona(target:Function){
    console.log(target);
   }
   @DecoradorPersona
   class Persona2{
    constructor(){

    }
   }
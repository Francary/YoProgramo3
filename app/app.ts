let message: string ='Hello World Probando 3.0'
console.log(message);
let nombre: string = "Mateo";
const mensajePractica = `Mi nombre es ${nombre} Soy nuevo en TypeScript.`;
console.log(mensajePractica)

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

   // Uso de una Super Clase 

   class Operacion {
    protected valorA:number;
    protected valorB:number;
    protected resultado:number;
    constructor (){
        this.valorA=0;
        this.valorB=0;
        this.resultado=0;
    }
    set ValorA(value:number) {
        this.valorA=value;
    }
    set ValorB(value:number) {
        this.valorB=value;
    }
    get Resultado ():number{
        return this.resultado;
    }
   }

   class Suma extends Operacion
   {
    Sumar ()
    {
        this.resultado=this.valorA+this.valorB;
    }
   }
   class Resta extends Operacion
   {
    Restar ()
    {
        this.resultado=this.valorA-this.valorB;
    }
   }

   let opercaionS= new Suma();
   opercaionS.ValorA=45;
   opercaionS.ValorB=10;
   opercaionS.Sumar();
   console.log("El resultado de la suma es "+opercaionS.Resultado);
   alert("El resultado de la suma es "+opercaionS.Resultado)

   let opercaionR= new Resta();
   opercaionR.ValorA=45;
   opercaionR.ValorB=10;
   opercaionR.Restar();
   console.log("El resultado de la resta es "+opercaionR.Resultado);
   alert("El resultado de la resta es "+opercaionR.Resultado);


// Practica de Aereoplano

class Turbina
{
    private numTurbinas:number = 0;
    public constructor(n :number)
    {
        this.numTurbinas = n;
    }
    public ToString()
    {
        return this.numTurbinas +" Turbina/s";
    }
}


class Cubierta
{
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean = false;
    private sistemaEmergencia:boolean = false;
    private numTanquesCombustible:number = 4;
    private numPuestasSalidas:number = 4;

    public constructor( pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number)

    {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuestasSalidas = pPuertasSalida;
    }
    
    public ToString()
    {
        let mensaje = "Cubierta compuesta de: " ;
        if( this.cabinaVuelo)
        {
            mensaje += " cubierta de Vuelo, ";
        }
        if(this.cabinaTripulacion)
        {
            mensaje += " cubierta de Tripulación, ";            
        }
        if(this.sistemaEmergencia)
        {
            mensaje += " Sistema de Emergencia, ";
        }
            mensaje += this.numTanquesCombustible + " Tanques de Combustible, ";
            mensaje += this.numPuestasSalidas + " Puertas de Salida. ";
        return mensaje;    
    }
}

class Helice
{
    private numHelices:number = 1;
    public constructor(n :number)
    {
        this.numHelices = n;
    }
    public ToString()
    {
        return this.numHelices + "  Helices";
    }
}

class Alas
{
    private numAla:number = 2;
    public constructor(n :number)
    {
        this.numAla = n;
    }
    public ToString()
    {
        return this.numAla + "  Las Alas";
    }
}
class TrenDeAterrizaje
{
    private numTrenAterrizaje:number = 3;
    public constructor(n :number)
    {
        this.numTrenAterrizaje = n;
    }
    public ToString()
    {
        return this.numTrenAterrizaje + "  Los Trenes";
    }
}

class Aereoplano
{
    private helice: Helice ;
    private trenAterrizaje: TrenDeAterrizaje ;
    private alas: Alas ;
    private cubierta: Cubierta;
    constructor( phelice:Helice, pTrenAterrizaje:TrenDeAterrizaje, pAlas:Alas, pCubierta:Cubierta)
    {
        this.helice = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }
    public ToString()
    {
        let mensaje = " Aeroplano compuesto por: ";
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;
    }
}
// Practica de Interfaces 

interface IPersona {
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        pais: string;
        ciudad: string;
    },
    mostrarDireccion: ()=>string;
}

const gente: IPersona ={
    nombre:'Perla',
    edad: 33,
    direccion:{
        calle:'San Martin ',
        pais: 'Argentina ',
        ciudad: ' Capital Federal '
    },
    mostrarDireccion(){
        return this.nombre+ ' , ' +this.direccion.ciudad+' , ' +this.direccion.pais;
    }
}
console.log(gente.mostrarDireccion());
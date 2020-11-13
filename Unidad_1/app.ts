
(function(){
    // ------------- EJECUTAR ARCHIVOS -----------//
    // tsc nombreArchivoTs -> Ejecutar el archivo de typescript para que se transcriba a un archivo javascript
    // tsc -wacth -> para estar ejecutando cada que exista un cambio en el archivo de typescript
    //para excluir un archivo de ts al momento de ejecutar tsc utilizamos la propiedad exclude 
        // en el archivo tsconfing.json e indicamos el nombre del folder que contiene los archivos a excluir
            // EJEMPLO:  "exclude": ["typescript_excluir"],

    // ------------- TEMPLATES LITERALES ----------------- //
    const nombre = 'Ana';
    const apellido = 'Renteria';
    const edad     = 33;

    const salida = `${nombre}`;
    console.log(salida);

    //------------ PARAMETROS DE FUNCIONES ---------------------------//
    // Orden: Obligatorios, opcionales, por defecto
            //  ----- PARAMETROS OBLIGATORIOS-----//
            function activar(quien: string){
            }
            activar('Gordon');

            //  ----- PARAMETROS OPCIONALES-----//
               function activar3(momento? : string){    
            }
            activar3();

            //  ----- PARAMETROS POR DEFECTO-----//
            function activar2(objeto: string = 'batiseñal' ){
            }
            activar2();
        

    // // ----------------- FUNCIONES FLECHA ---------------------------- //
    //     // === FUNCION NORMAL GUARDADA EN UNA VARIABLE === 
        const miFuncion  = function(a: string){
             return a;
         }
    //     // === FUNCION FLECHA GUARDADA EN UNA VARIABLE === 
        const miFuncionF = (a: string) =>{
            
        }
    //     // === FUNCION FLECHA GUARDADA EN UNA VARIABLE === 
        const miFuncionF2 = (a: string) => a.toUpperCase(); // = return a.toUpperCase();

        // === FUNCION FLECHA GUARDADA EN UNA VARIABLE === 
        const miFuncionF3 = (a: number, b: number) => a + b; // = return a+b;
        console.log (miFuncionF3(5,3));
        
    
        const hulk = {
            nombre: 'hulk',
            smash(){
                setTimeout(() =>{
                    // las funciones de flecha no modifican el ambito de las variables, entonces apunta a la variable "nombre"
                   console.log(`${this.nombre} smash!!!`);
                },1000);
            }
        }
    hulk.smash();

    // // ----------------- DESTRUCTURACION DE OBJETOS Y ARREGLOS ---------------------------- //

    //     //--------------------------- OBJETOS --------------------// 
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }
    //Haciendo la destructuracion de objetos
    const {poder, clave} = avenger; //toma el objeto avenger y extrae las propiedades dentro de los {}
    console.log(poder);
    console.log(clave);

    //Haciendo destructuracion de los argumentos de una funcion:
    const  extraer = ({nombre ,poder} : any) =>{
        console.log(nombre);
        console.log(poder);
    } 
    extraer(avenger); 

    //     //-------------------------------- ARREGLOS ------------------------------ //
    const avengers: string[] = ['thor','ironman','spiderman'];
    // destructurar el arreglo
    const [thor,ironman,arana] = avengers; //se toma en cuenta la posicion y se guarda en una variable con el nombre que se especifica en los []
    console.log(arana);//arroja 'spiderman'
    //Cuando no interesa alguna posicion, se ponen espacios vacios separados por comas:  const [,,arana] = avengers;

    //Exreaer en una funcion:
    const extraerArr = ([thor,ironman,arana]:string[]) =>{
        console.log(thor); //arroja 'thor'
    }
    extraerArr(avengers); 

    // // ---------------------- PROMESAS -------- ---------------------------- //
    console.log('inicio');
        const prom1 = new Promise((resolve, reject)=>{
            //resolve : lo que se ejecuta cuando la promesa se ejecute correctamente
            //reject : lo que se ejecuta cuando la promesa se ejecute incorrectamente
            setTimeout(()=>{
                resolve('Se termino el timeout');
            },1000)
        }); 
    //then: lo que se ejecuta  cuando se hace correctamente
    prom1.then(mensaje => console.log(mensaje))
    //catch: lo que se ejecuta cuando se dispara un error (reject)
    .catch(err => console.log(err));

    console.log('fin'); 

    // // Ejemplo de promesa:
    const retirar = (dinero: number) : Promise<number> =>{
        let montoActual = 2000;
        return new Promise( (resolve,reject)=>{
            if(montoActual < dinero){
                reject('No hay dinero suficiente');
            }else{
                montoActual = montoActual - dinero;
                resolve(montoActual);
            }
        });
    }
    retirar (1000)
    .then(montoActual => console.log(`Me queda ${montoActual}`))
    .catch(console.warn)


    // // ---------------------- INTERFACES TYPESCRIPT  -------- ---------------------------- //
    //Interface (una clase para definir reglas): una clase a la que solo se le definen atributos, no tiene constructor ni funciones, es como definir un tipo de dato
    interface Xmen{
        nombre: string;
        edad: number;
    }

    const enviarMision = (xmen: Xmen) =>{
        console.log(`Eviando a ${xmen.nombre} a la mision`);
    }
    const wolverine = {
        nombre: 'Logan',
        edad: 60
    }
    
    enviarMision(wolverine);


    // --------------------------- CLASES  -------- ---------------------------- //
    // Metodos: acciones que puede hacer un objeto
    // Propiedades: describen a las clases
    // Herencia: una clase hereda propiedades y metodos de otra clase
    
    //Definicion de clase manera I
    // class Avenger{
    //     nombre: string;
    //     equipo: string;
    //     nombreReal : string;
    //     puedePelear? : boolean;
    //     peleasGanadas : number;

    //     constructor(nombre: string, equipo : string){
    //     this.nombre = nombre;
    //     this.equipo= equipo;
    //     }

    // } 

    // -------- Definicion de una clase II----------------
    class Avenger{
       
        // nombre: string;
        //  equipo: string;

        constructor(public nombre: string,
                    public equipo: string){
        //NOTA: al inyectar con public/private no es necesario hacer una declaracion de propieades explitica fuera del constructor
        }

    } 
    //Instanciación de clases:
    const antman = new Avenger('Antman', 'ironman');


    // --------------------------- DECORADORES CLASES  -------- ---------------------------- //
    // los decoradores son funciones que añaden funciones adicionales en una clase 
    function imprimirConsola(constructorClase: Function){
        console.log(constructorClase);
    }
    // @imprimirConsola -> Decorador de clase
    class ClaseEjemplo{}

    
    // --------------------------- Tipado de retorno de un funcion  -------- ---------------------------- //
    const sumar = (a: number, b:number) : number =>{
        return a+b;
    }

    




})();

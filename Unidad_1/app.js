(function () {
    // ------------- EJECUTAR ARCHIVOS -----------//
    // tsc nombreArchivoTs
    // tsc -wacth -> para estar ejecutando cada que exista un cambio en el archivo de typescript
    // ------------- TEMPLATES LITERALES ----------------- //
    var nombre = 'Ana';
    var apellido = 'Renteria';
    var edad = 33;
    var salida = "" + nombre;
    console.log(salida);
    //------------ PARAMETROS DE FUNCIONES ---------------------------//
    // Orden: Obligatorios, opcionales, por defecto
    //  ----- PARAMETROS OBLIGATORIOS-----//
    function activar(quien) {
    }
    activar('Gordon');
    //  ----- PARAMETROS OPCIONALES-----//
    function activar3(momento) {
    }
    activar3();
    //  ----- PARAMETROS POR DEFECTO-----//
    function activar2(objeto) {
        if (objeto === void 0) { objeto = 'batiseñal'; }
    }
    activar2();
    // // ----------------- FUNCIONES FLECHA ---------------------------- //
    //     // === FUNCION NORMAL GUARDADA EN UNA VARIABLE === 
    var miFuncion = function (a) {
        return a;
    };
    //     // === FUNCION FLECHA GUARDADA EN UNA VARIABLE === 
    var miFuncionF = function (a) {
    };
    //     // === FUNCION FLECHA GUARDADA EN UNA VARIABLE === 
    var miFuncionF2 = function (a) { return a.toUpperCase(); }; // = return a.toUpperCase();
    // === FUNCION FLECHA GUARDADA EN UNA VARIABLE === 
    var miFuncionF3 = function (a, b) { return a + b; }; // = return a+b;
    console.log(miFuncionF3(5, 3));
    var hulk = {
        nombre: 'hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                // las funciones de flecha no modifican el ambito de las variables, entonces apunta a la variable "nombre"
                console.log(_this.nombre + " smash!!!");
            }, 1000);
        }
    };
    hulk.smash();
    // // ----------------- DESTRUCTURACION DE OBJETOS Y ARREGLOS ---------------------------- //
    //     //--------------------------- OBJETOS --------------------// 
    var avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    };
    //Haciendo la destructuracion de objetos
    var poder = avenger.poder, clave = avenger.clave; //toma el objeto avenger y extrae las propiedades dentro de los {}
    console.log(poder);
    console.log(clave);
    //Haciendo destructuracion de los argumentos de una funcion:
    var extraer = function (_a) {
        var nombre = _a.nombre, poder = _a.poder;
        console.log(nombre);
        console.log(poder);
    };
    extraer(avenger);
    //     //-------------------------------- ARREGLOS ------------------------------ //
    var avengers = ['thor', 'ironman', 'spiderman'];
    // destructurar el arreglo
    var thor = avengers[0], ironman = avengers[1], arana = avengers[2]; //se toma en cuenta la posicion y se guarda en una variable con el nombre que se especifica en los []
    console.log(arana); //arroja 'spiderman'
    //Cuando no interesa alguna posicion, se ponen espacios vacios separados por comas:  const [,,arana] = avengers;
    //Exreaer en una funcion:
    var extraerArr = function (_a) {
        var thor = _a[0], ironman = _a[1], arana = _a[2];
        console.log(thor); //arroja 'thor'
    };
    extraerArr(avengers);
    // // ---------------------- PROMESAS -------- ---------------------------- //
    console.log('inicio');
    var prom1 = new Promise(function (resolve, reject) {
        //resolve : lo que se ejecuta cuando la promesa se ejecute correctamente
        //reject : lo que se ejecuta cuando la promesa se ejecute incorrectamente
        setTimeout(function () {
            resolve('Se termino el timeout');
        }, 1000);
    });
    //then: lo que se ejecuta  cuando se hace correctamente
    prom1.then(function (mensaje) { return console.log(mensaje); })["catch"](function (err) { return console.log(err); });
    console.log('fin');
    // // Ejemplo de promesa:
    var retirar = function (dinero) {
        var montoActual = 2000;
        return new Promise(function (resolve, reject) {
            if (montoActual < dinero) {
                reject('No hay dinero suficiente');
            }
            else {
                montoActual = montoActual - dinero;
                resolve(montoActual);
            }
        });
    };
    retirar(1000)
        .then(function (montoActual) { return console.log("Me queda " + montoActual); })["catch"](console.warn);
    var enviarMision = function (xmen) {
        console.log("Eviando a " + xmen.nombre + " a la mision");
    };
    var wolverine = {
        nombre: 'Logan',
        edad: 60
    };
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
    var Avenger = /** @class */ (function () {
        // nombre: string;
        //  equipo: string;
        function Avenger(nombre, equipo) {
            this.nombre = nombre;
            this.equipo = equipo;
            //NOTA: al inyectar con public/private no es necesario hacer una declaracion de propieades explitica fuera del constructor
        }
        return Avenger;
    }());
    //Instanciación de clases:
    var antman = new Avenger('Antman', 'ironman');
    // --------------------------- DECORADORES CLASES  -------- ---------------------------- //
    // los decoradores son funciones que añaden funciones adicionales en una clase 
    function imprimirConsola(constructorClase) {
        console.log(constructorClase);
    }

    // @imprimirConsola -> Decorador
    var ClaseEjemplo = /** @class */ (function () {
        function ClaseEjemplo() {
        }
        return ClaseEjemplo;
    }());
    // --------------------------- Tipado de retorno de un funcion  -------- ---------------------------- //
    var sumar = function (a, b) {
        return a + b;
    };
})();

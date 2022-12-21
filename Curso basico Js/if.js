//condicionales

//solo va a correr "si esto es verdadero" ya que if valida si lo que esta dentro es verdadero,sino es asi no va a hacer nada. 
if (true) {
    console.log("hola");    
}   else {
    console.log("soy falso")
}


//si esto es falso para eso esta el else ya que valida si esto es falso y le colocaremos entonces que va a pasar    console.log("hola");    

if (true) {
    console.log("hola");    
}   else {
    console.log("soy falso")
}

//si tengo que validar as cosas antes de estar seguros de que es falso colocamos else if

if (true) {
    console.log("hola");  
} else if (no) {

}

//ejemplo

var edad = 18;

if (edad === 18) {
    console.log("puedes votar es tu primera votacion");
} else if( edad >= 18 ) {
    console.log("puedes votar");
} else if (edad > 20 ) {
    console.log("ya has votado");
} else {
    console.log("lo siento aun no puedes votar");
}



//operador ternariio

// condicion ? Bloque verdadero : Bloque falso

// ejemplo

function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par"

//otro ejemplo 

numero = 1;

resultado = numero === 1 ? "si soy un uno " : " no soy un uno";


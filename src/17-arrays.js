
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

//saber el tamano
console.log(frutas.length);

//para aceder a un elemto del array inicia en 0 el indice
console.log(frutas[1]);

//agregar elemntos al array
frutas.push("Uvas"); 

//eliminar el ultimo elemento del array
frutas.pop("Uvas");

//agrega uno o mas elemntos al array en la primera posicion
frutas.unshift("Platano", "Manzana");

//eliminar el elemento que este en el inicio
frutas.shift(); 

//saber la posicion de un elemnto
frutas.indexOf("Cereza");

function solution(arraySecreto){
    return typeof(arraySecreto.shift()) == 'string';
}
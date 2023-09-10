//if else
if (true){
    console.log("Hola");
}else{
    console.log("XD");
}

//if  else if  else
if(edad === 18){
    console.log("Puedes votar, sera tu 1ra votacion");
}else if (edad > 18){
    console.log("Puedes volver a votar");
}else{
    console.log("Aun no tienes la edad sufuciente para votar");
}


//if ternario
var numero = 1;
var resultado = numero === 1? "Si soy uno" : "No, no soy uno";



/**************************************************************************/
var opciones = ["Piedra", "Papel", "Tijera"];

var opcionPc = opciones[Math.floor(Math.random() * 2)];
var opcionJugador = opciones[1]; 

ganadorJuego(opcionJugador, opcionPc)

console.log(opcionJugador + " vs " + opcionPc)

function ganadorJuego(jugador, machine){

    if(jugador == "Piedra" && machine =="Tijera"){
        console.log("Ganador");
    }else if(jugador == "Papel" && machine == "Piedra"){
        console.log("Ganador");
    }else if(jugador == "Tijera" && machine == "Papel"){
        console.log("Ganador");
    }else if(jugador == machine){
        console.log("Empate");
    }else{
        console.log("Perdiste");
    }

}









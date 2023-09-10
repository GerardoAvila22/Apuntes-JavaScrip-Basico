var estudiantes = ["Gerardo", "Jose", "Diego"];

function saludarEstudiante(estudiantes){
    for (let index = 0; index < estudiantes.length; index++) {
        console.log(`Hola, ${estudiantes[index]}`);
    }
}

/****************************************************************************/
var estudiantes = ["Gerardo", "Jose", "Diego"];

for (var i = 0; i < estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}
/********************************************************************************/
var estudiantes = ["Gerardo", "Jose", "Diego"];

for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

/*******************************************************************************/

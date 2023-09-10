var estudiantes = ["Gerardo", "Jose", "Diego"];

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}


/**************************************************************************/
function solution(estudiantes, deathCount, nuevo){
    if(deathCount > 0){
        for (let i = 0; i < deathCount; i++) {
            estudiantes.shift();
        }
    }

    estudiantes.push(nuevo);
}





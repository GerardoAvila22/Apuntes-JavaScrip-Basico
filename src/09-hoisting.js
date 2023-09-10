/*de esta manera se declara una variable que aun no esta inicializada*/ 
var miNombre;
/*aqui se inicializa la variable dandole un valor*/
miNombre = "Gerardo";
/*se muestra por consola el valor de la variable*/
console.log(miNombre);


/*pero que pasaria si primero imprimo la variable antes de ser declarada*/
console.log(miNombre);
/*el resulado en consola sera undefind ya que js le asigna un valor por defecto 
al detectar que es una variable que aun no esta declarada al llegar a la linea 
donde esta declarada el valor sigue siendo undefind ya que no tiene asignado 
ningun valr la variable */
var miNombre;


console.log();
var miNombre = "Gerardo";
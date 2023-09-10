var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "TV", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celeular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];


//un metodo para recorrer un array es filtre que nos devuelve solo
//en un nuevo array los elementos filtrados
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});


//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//Mapea todo el array y nos trae lo que estamos buscando
var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre;
});


//Busca en el array el valor que le estamos pidiendo si lo encutra lo retorna en un nuevo array
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});


//no guarda en una nueva variable recorre el array y muestra datos un ejemplo sirve para mostrar ciertos productos del array
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


//devuelve un resultado booleano dependiendo la validacion
var articulosBaratos = articulos.some(function(articu) {
    return articulos.costo <= 700;
});


/*****************************************************************************************/
function solution(cars) {
    // 👇 Este es el código que no funciona
    return cars.filter(function(cars){
         return cars.licensePlate   
        }
    );
}  
solution(cars);



const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

var  bandera = true;

while (bandera) {
    var answer = prompt("¿Cuánto es 2 + 2?!");
    if(answer == 2){
        bandera = false;
        alert("Correcto!...")
    }else{
        alert("Fallaste:(")
    }
}

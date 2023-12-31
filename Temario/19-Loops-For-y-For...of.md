## **Loops: For y For...of**

Un bucle *(loop)* o **ciclo repetitivo** es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

Existen dos tipos de ciclos repetitivos:

- For (para)
- While (mientras)

### Qué es un ciclo *for*

**Para el ciclo `for` conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones.**

Por ejemplo, si queremos los 10 primeros números, sabemos que el ciclo se repetirá 10 veces. Si accedemos a los elementos de un *array*, sabemos que el ciclo se repetirá `length` veces.

### Cómo utilizar el ciclo *for*

La estructura del ciclo `for` es la siguiente:

```jsx
for (condición) {
    // Bloque de código
}
```

La condición consta de tres partes:

- **Inicio:** se debe inicializar una variable que será evaluada en la expresión a comparar. Esta variable puede ser declarada dentro o fuera de la condición.
- **Comparación:** es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
- **Pasos:** son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.

Cada una de las partes debe estar separada por un punto y coma ( `;`).

**Practiquemos el uso del bucle *for***

Por ejemplo, generemos los números del 1 al 10:

- **Inicio:** inicializamos una variable con el valor de 1, generalmente se utiliza `i` (índice) como variable para el bucle, pero no es obligatorio. En este caso usaremos `var num = 1`.
- **Condición:** La condición será mientras sea menor o igual que 10 (`num <= 10`),
- **Pasos:** Debemos aumentar la variable en una unidad, por lo tanto, podemos utilizar `num = num +1`, `num += 1` o `num++`. Este último únicamente cuando la variable aumente una unidad.

La estructura es la siguiente:

```jsx
for (var num = 1; num <= 10; num++) {
  console.log(i)
}
```

Esto se leería como: “Para (`for`) la variable `num` que inicia en 1 (`num = 1`) mientras sea menor o igual que 10 (`num <= 10`) en pasos de 1 (`num++`) ejecuta una o varias instrucciones (`console.log`)”.

Mira la siguiente tabla que muestra cómo cambia la variable `num` en cada ciclo.

| # Ciclo | num | num <= 10 | num++ |
| --- | --- | --- | --- |
| 1.º | 1 | true | 2 |
| 2.º | 2 | true | 3 |
| … | … | … | … |
| 10.º | 10 | true | 11 |
| 11.º | 11 | false | Termina el bucle |

### Cómo recorrer *arrays* con el ciclo *for*

En el anterior ejemplo aprendiste a generar números del 1 al 10, utilicemos la misma lógica para recorrer un *array*.

¿Qué debemos usar para [acceder a los elementos de un array](https://platzi.com/clases/1814-basico-javascript/26303-arrays/)? Exactamente, sus índices (variable `i`). Debemos generar los índices desde `0` hasta `length` (que no debe estar incluido). Con esto, empleamos la misma variable `i` para acceder a cada elemento con la sintaxis de corchetes `array[i]`.

La estructura sería siguiente:

```jsx
var nombres = ["Andres", "Diego", "Platzi", "Ramiro", "Silvia"]

for(var i = 0; i < nombres.length; i++){
    console.log( nombres[i] )
}
```

### Qué es un ciclo *for … of*

El ciclo `for ... of` es una variación del ciclo `for` que se utiliza para **recorrer los valores de los elementos de un *array***.

La estructura del ciclo `for ... of` es la siguiente:

```jsx
for (var elementoof array){
    //Bloque de código
}
```

**La variable `elemento` es la referencia a cada uno de los elementos del *array***. Este puede tener cualquier nombre, por eso se inicia con `var`, debido a que es una variable como el índice `i` en el bucle `for`.

```jsx
var array = [5, 4, 3, 2, 1]

for (var elementoof array) {
  console.log(elemento) // 5 4 3 2 1
}
```

**Por convención, se escribe la variable `elemento` en singular con respecto al nombre del `array`.** Por ejemplo, si el nombre del *array* es `datos`, el nombre de la variable de cada elemento sería `dato`, y así sucesivamente.

```jsx
for (var datoof datos) { ... }
for (var nameof names) { ... }
for (var numberof numbers) { ... }
for (var elof elements) { ... }
```

### Limitaciones del ciclo *for … of*

**El ciclo `for ... of` solo accede al valor de cada uno de los elementos del array.** Por consiguiente, si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y cambiar su valor.

Por ejemplo, si quieres duplicar el valor de cada elemento del array, necesitarás su índice.

```
var numbers = [5, 4, 3, 2, 1]

// ❌ No cambia el array original
for (var numberof numbers) {
  number = number * 2
}

console.log(numbers) // [5, 4, 3, 2, 1]

// ✅ Cambia el array original
for(var i=0; i < numbers.length; i++){
    numbers[i] = numbers[i] * 2
}

console.log(numbers) // [ 10, 8, 6, 4, 2 ]

```

**Sin embargo, esto no es malo, depende del problema que estés afrontando.** Una forma de solucionar el anterior problema utilizando `for ... of`, es creando otro *array* vacío para llenarlo con los nuevos valores, de esta manera no cambiará el *array* original.

```jsx
var numbers = [5, 4, 3, 2, 1]
var duplicates = []

for (var numberof numbers) {
  duplicates.push(number * 2)
}

console.log(duplicates) // [ 10, 8, 6, 4, 2 ]

```
## **Playground: rescata al estudiante**

En este desafío tu función `solution` recibirá 3 parámetros:

- `estudiantes`: un array de strings con varios nombres de estudiantes.
- `deathCount`: un número entero.
- `nuevo`: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).

Tu función debe retornar un array de elementos con las siguientes indicaciones:

- Si el parámetro `deathCount` es igual a 0, debes retornar un array con los mismos elementos que tenía el array de `estudiantes` y agregando el elemento `nuevo` al final.
- Si el parámetro `deathCount` es mayor a 0, debes retornar un array con **los mismos elementos** del array `estudiantes` pero eliminando la cantidad de estudiantes que indica el número `deathCount` y agregando el elemento `nuevo` al final.

> 💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.
> 

Ejemplo 1:

El array `estudiantes` contiene los elementos `"Nico"` y `"Zulle"`. El número `deathCount` es igual a 0. Y el `nuevo` estudiante es `"Santi"`. Al `deathCount` ser igual a 0, `"Nico"` y `"Zulle"` se quedan. Y agregamos `"Santi"` al final.

```jsx
// Input
solution(["Nico", "Zule"], 0, "Santi")

// Output
["Nico", "Zule", "Santi"]
```

Ejemplo 2:

El array `estudiantes` contiene los elementos `"Juan"`. `"Juanita"` y `"Daniela"`. El número `deathCount` es igual a 1. Y el `nuevo` estudiante es `"Julian"`. Al `deathCount` ser igual a 1, el último elemento del array de estudiantes (`"Daniela"`) se debe ir. Y agregamos `"Julian"` al final.

```jsx
// Input
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")

// Output
["Juan", "Juanita", "Julian"]
```

Ejemplo 3:

El array `estudiantes` contiene los elementos `"Nath"`. `"Luisa"` y `"Noru"`. El número `deathCount` es igual a 2. Y el `nuevo` estudiante es `"Cami"`. Al `deathCount` ser igual a 2, los últimos 2 elementos del array de estudiantes (`"Luisa"` y `"Noru"`) se deben ir. Y agregamos `"Cami"` al final.
## **Playground: rescata al estudiante**

En este desafío tu función `solution` recibirá 3 parámetros:

- `estudiantes`: un array de strings con varios nombres de estudiantes.
- `deathCount`: un número entero.
- `nuevo`: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).

Tu función debe retornar un array de elementos con las siguientes indicaciones:

- Si el parámetro `deathCount` es igual a 0, debes retornar un array con los mismos elementos que tenía el array de `estudiantes` y agregando el elemento `nuevo` al final.
- Si el parámetro `deathCount` es mayor a 0, debes retornar un array con **los mismos elementos** del array `estudiantes` pero eliminando la cantidad de estudiantes que indica el número `deathCount` y agregando el elemento `nuevo` al final.

> 💡 Aclaración: NO debes eliminar TODOS los elementos del array original de estudiantes, sino eliminar la cantidad de estudiantes que indica el número deathCount.
> 

Ejemplo 1:

El array `estudiantes` contiene los elementos `"Nico"` y `"Zulle"`. El número `deathCount` es igual a 0. Y el `nuevo` estudiante es `"Santi"`. Al `deathCount` ser igual a 0, `"Nico"` y `"Zulle"` se quedan. Y agregamos `"Santi"` al final.

```jsx
// Input
solution(["Nico", "Zule"], 0, "Santi")

// Output
["Nico", "Zule", "Santi"]
```

Ejemplo 2:

El array `estudiantes` contiene los elementos `"Juan"`. `"Juanita"` y `"Daniela"`. El número `deathCount` es igual a 1. Y el `nuevo` estudiante es `"Julian"`. Al `deathCount` ser igual a 1, el último elemento del array de estudiantes (`"Daniela"`) se debe ir. Y agregamos `"Julian"` al final.

```jsx
// Input
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")

// Output
["Juan", "Juanita", "Julian"]
```

Ejemplo 3:

El array `estudiantes` contiene los elementos `"Nath"`. `"Luisa"` y `"Noru"`. El número `deathCount` es igual a 2. Y el `nuevo` estudiante es `"Cami"`. Al `deathCount` ser igual a 2, los últimos 2 elementos del array de estudiantes (`"Luisa"` y `"Noru"`) se deben ir. Y agregamos `"Cami"` al final.

```jsx
// Input
solution(["Nath", "Luisa", "Noru"], 2, "Cami")

// Output
["Nath", "Cami"]
```

Codigo

```jsx
function solution(estudiantes, deathCount, nuevo) {
  while (deathCount > 0) {
    estudiantes.pop();
    deathCount--;
  }

  estudiantes.push(nuevo);
  return estudiantes;
}
```
## ****Playground: detecta el elemento impostor de un array****

En este desafío vas a recibir un parámetro `arraySecreto` en la función `solution`. Debes retornar `true` si el primer elemento del `arraySecreto` es de tipo `string` y debes retornar `false` si es de cualquier otro tipo.

Input

```jsx
solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])
```

Output

```jsx
true
false
```

Codigo

```jsx
function solution(arraySecreto) {
  // Tu código aquí 👈
  return typeof (arraySecreto.shift()) == 'string';
}
```
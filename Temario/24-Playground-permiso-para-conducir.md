## **Playground: permiso para conducir**

En este desafío vas a recibir un objeto `car` como parámetro de la función `solution`.

Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad `licensePlate` (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad `drivingLicense` como `true`. Si no la tiene, devuelve el objeto original con la propiedad `drivingLicense` como `false`.

Input

```jsx
// Prueba 1
solution({
  color: 'red',
  brand: 'Kia',
});

// Prueba 2
solution({
  color: 'gray',
  brand: 'Chevrolet',
  licensePlate: 'AAA111',
});

// Prueba 3
solution({ licensePlate: 'RGB255'  });
```

Output

```jsx
// Prueba 1
{
  color: 'red',
  brand: 'Kia',
  drivingLicense: false,
}

// Prueba 2
{
  color: 'gray',
  brand: 'Chevrolet',
  licensePlate: 'AAA111',
  drivingLicense: true,
}

// Prueba 3
{
  licensePlate: 'RGB255',
  drivingLicense: true,
}
```

Codigo

```jsx
function solution(car) {
  if (car.licensePlate === null || car.licensePlate === undefined) {
    car.drivingLicense = false;
  }
  else {
    car.drivingLicense = true;
  }
  return car;
}
```

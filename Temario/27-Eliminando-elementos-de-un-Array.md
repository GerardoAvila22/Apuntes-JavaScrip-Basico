## **Eliminando elementos de un Array**

### .push()

El método `.push ()` nos permite agregar uno o más elementos al final de un array. A continuación veremos un ejemplo aplicado con un array que contiene números:

![](https://static.platzi.com/media/user_upload/Imagen%201-bc72a917-1b18-423d-ad34-d75d26341605.jpg)

Como podemos ver, al momento de ejecutar la función se agregan los números 6 y 7 al array. Ahora revisemos un ejemplo con strings:

![](https://static.platzi.com/media/user_upload/Imagen%202-f31c19d3-911e-4157-b9ca-a87ec3f50631.jpg)

Como podemos ver, agregamos dos cadenas de strings al ejecutar la función donde tenemos `txtArray.push()`. Es decir, indico el array al que voy agregar elementos, uso el método .push(), y dentro de .push() indico los elementos que quiero agregar al string. Finalmente, el `console.log()` lo uso para revisar en la consola si esto sucedió o no.

### .shift()

Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. `.shift()` eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

![](https://static.platzi.com/media/user_upload/Imagen%203-633de332-2242-4957-a79d-d263bff35c1a.jpg)

Como vemos, luego de aplicar `.shift()` se eliminó exitosamente el primer elemento del array. ¿Y si quisiéramos eliminar el último elemento? Pasemos al bonus track de esta clase 🙌🏼.

### Bonus Track

Si ya entendiste cómo funciona `.shift()` aplicar `.pop()` te será pan comido 🍞. El método `.pop()` eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, `pop()` eliminará el elemento en el índice 4. Utilicemos el mismo ejemplo pero usando este método.

![](https://static.platzi.com/media/user_upload/Imagen%204-f2fc98b7-a80a-4598-a049-1533cbb78404.jpg)


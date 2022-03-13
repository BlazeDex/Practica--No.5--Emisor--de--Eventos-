let obj = {
    nombre: 'Alan',
    edad: '19',
    apellido: 'Hernández',
    keypress: function () {
        console.log('Se ha presionado una tecla.');
    },
    mouseOver : function () {
        console.log('El puntero del mouse está arriba.');
    }
}

console.log(obj.nombre); 
/*En este console estamos imprimiendo el contenido de la propiedad 
"nombre" del objeto.*/
console.log(obj['nombre']); 
/*En este console estamos imprimiendo la misma propiedad, pero la
diferencia es que llamamos a la propiedad mediante el uso de Brackets
y el dato que buscamos (en este caso nombre) entre comillas.*/

let myKey = 'nombre';
/*Hemos creado una variable que contenga como valor un string, en este caso "nombre".*/
console.log(obj[myKey]);
/*Ahora en lugar de poner el string dentro de los brackets solo ingresamos el nombre de
la variable. Puede parecer que es un cambio algo irrelevante, pero es más óptimo, debido 
a que podemos cambiar únicamente el valor de la variable "myKey" en lugar de cambiar el 
atributo "nombre" en todos los console que realizamos.*/

myKey = 'keypress';
/*Cambiamos el valor de la variable a 'keypress'.*/
console.log(obj[myKey]());
/*Como resultado ahora nos imprime el resultado de la función dentro del atributo keypress, 
la cual se encuentra como atributo dentro del objeto.*/
myKey = 'mouseOver';
/*Ahora actualizamos el valor de myKey a 'mouseOver'.*/
console.log(obj[myKey]()); 
/*Por consiguiente obtendremos un resultado similiar a cuando el valor era 'keypress',
sólo que esta vez será el resultado correspondinte a la función dentro del atributo
mouseOver.*/

let myArray = []; /*Inicializando el array.*/

myArray.push(4);
/*Añadimos el número 4 al array como un valor de tipo number. */
myArray.push('una cadena');
/*Añadimos al array un valor de tipo string que contiene la frase "una cadena"*/
myArray.push(obj);
/*Añadimos el objeto que creamos al array. */
myArray.push(function () {
    console.log('hola desde el array');
});
/*Para finalizar, estamos añadiendo una función.*/

console.log(myArray);
/*Nos damos cuenta de que todos los valores que añadimos a "myArray" no son el 
mismo tipo de dato, pues son un number, un string, un object y una function respectivamente.
Por lo tanto al momento de imprimir el array la consola nos mostrará en orden todo lo que 
añadimos, pero nos muestra que no son el mismo tipo de dato. En el caso del objeto, se mostrarán
los atributos que lo conforman (nombre, edad, apellido, keypress, mouseOver). En el caso de las
funciones sólo podremos visualizar "[Function (anonymous)]" (también aplica para keypress y mouseOver)
NO PODEMOS VER EL RESULTADO porque no estamos llamando a dichas funciones.*/

console.log(myArray[2][myKey]());
/*Aquí estamos imprimiendo el valor que se encuetra en la posición número 2 del array, es decir
el objeto. Añadimos "[myKey]" para indicar que queremos imprimir específicamente esa propiedad, 
la cual era: "mouseOver", cuyo contenido es, en este caso, una función, por esto agregamos los 
paréntesis al final.*/

console.log(myArray[3]());
/*Estamos imprimiendo la función "anonymous", es necesario agregar los paréntesis al final, de lo
contrario no podremos ver el resultado de la función.*/

/*Si escribiéramos console.log(myArray[3]) estaríamos imprimiendo la función como tal, es decir,
la terminal lo mostrará como: [Function (anonymous). Por el contrario, si añadimos paréntesis al 
final, tal y como lo acabamos de hacer con el conosole.log() de arriba, estamos indicando que imprima
el contenido de dicha función, ya que la estamos invocando.*/

let funcArray = [];

funcArray.push( () => {
    console.log('Function 1');
});

funcArray.push( () => {
    console.log('Function 2');
});

funcArray.push( () => {
    console.log('Function 3');
});

funcArray.forEach((item) => {
    item();
});
/*En esta última línea de código acabamos de realizar un forEach,
el cual funciona básicamente como un ciclo. Lo que permite invocar
las funciones que se encuetran en las posiciones 0, 1 y 2 respectivamente.
Por esta razón, al realizar el node app podemos observar que se imprimen
los console.log() de cada función.*/
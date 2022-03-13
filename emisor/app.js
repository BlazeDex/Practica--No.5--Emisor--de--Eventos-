var Emitter = require('./emitter');
/*Importando la dependencia.*/

var emtr =  new Emitter();
/*Estamos agregando la funcionalidad que tenemos en emitter.js, es decir, el Emisor de Eventos.*/

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.')
});

emtr.on('greet', () => {
    console.log('A greeting ocurred!')
});

console.log('Hello!'); /*Se está imprimiendo "Hello!" en la consola.*/
emtr.emit('greet');
/*El resultado que muestra la terminal son las respuestas de las 2 funciones anteriores.
Al ejecutar el emisor de eventos se muestran todos aquellas funciones contenidas en el
evento "greet", por lo tanto, obtenemos dos respuestas con tan sólo una llamada.*/

emtr.on('jump', () => {
    console.log('someone jumped!');
});

console.log(emtr); 
/*Aquí estamos imprimiendo el contenido de emtr, el cual nos muestra los eventos
"greet" el cual contiene dos funciones y "jump" que contiene solamente una.*/
emtr.emit('jump');
/*Ahora emit también imprimió el resultado de la función que se encontraba en el 
evento "jump", cuyo resultado es "someone jumped!".*/
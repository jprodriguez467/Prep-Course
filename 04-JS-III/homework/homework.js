// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length - 1]; //array.length se transforma en un numero, va a ser la cantidad de elementos que tiene esa variable
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length; // me va a devolver la cantidad de elementos que tiene una array, podemos sabar cuantos elementos tiene una array
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i = 0;i < array.length; i++) {
    array [i] = array [i] + 1};
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento); // push agrega el elemento al final
  return array;
}

//                                                  8
function agregarItemAlComienzoDelArray(array, elemento) {//array es un lugar que contiene datos y un elemento
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  //ejemplo array es [0,1,2,3] si le agregamos el metodo unshift el elemento el numero 8 va al principio de la array
  //array = [0,1,2,3]
  // elemento = 10
  //inishift agrego el elemento al comienzo del array

  array.unshift(elemento); //unshift agrega un elemento al comienzo// el elemento numero 8 va al principio de la array
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas///jp que esten en una sola oracion
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  //para este ejercici vas a usar un metodo de la array que es join que une los elementos de la array
  return palabras.join(" ");
}

//////////////////////////////////////
//////[2,3,1,5]
///////////////////     la array tiene un elemento que es 1
//                            1
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  for(var i=0; i< array.length; i++){  //compara cada uno de los elementos (i++) va incrementando en uno en uno
    if(array i === elemento){// si la array en la posicion i es extrictamente igual a la posicion elemento
      return true; ////si es asi retorna verdadero la lectura del sistema pasa de posision en posicion hasta encontrar el elemento que en este caso es 1
    } //// en el caso de que el elemento es 8 es decir no existe dentro de la array va a devolver falso
  }
  return fase;
}

//////////////////////////////////////
/////////[2,5,2]
function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma= 0;
  for (var i=0; i< numero.length; i++){
  |  suma = suma + numero [i]
  }
  return suma;
}

///[2,5,3]
function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio= 0;
  for (var i =0; i < resultadosTest.length; i+++){
    | promedio = promedio +resultadosTest [i];
      }
      return promedio/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMasGrande= 0;//
  for (var i=0; i <nemeros.length; i ++){
    if(numeros [i] > numerosMasGrande){
      numeroMasGrande = numeros [i];
    }
    return numeroMasGrande;
  }
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var acumulador = 1;
  if (arguments.legngth === 0){
    return 0;
      } else if( arguments.legngth === 1){
        return [0];
      }else {
        for(var i=0; i <arguments.length; i ++){
          |acumulador = acumulador*arguments; [i]
        }
      }
    
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var acumulador=0;//2
for(var i =0 i< arreglo.length; i++){
  if( arreglo [i] >18){
    | acumulador = acumulador + 1
      }
}
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
if(numeroDeDia === 1||numeroDeDia === 7){
 | return "Es fin de semana"
  } else if (numeroDeDia > 1 && numeroDeDia < 7) {
  |return "Es dia de Laboral";  |
  } 



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var string= n+ "";
  if (string [0] === "9"){
    return true;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for( var i=0; i < arreglo.legngth -1; i++){
    if(arreglo [i] !== arreglo[i+1]){
      return false;
      }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for (var i= 0; i< array.legngth; i++){
    if(array [i] === "Enero" || array [i] === "Marzo" === "Noviembre"){
      nuevoArray.push(array[i]);
      }
  }
  if(nuevoArray.legngth<3){
    return "No se encontraron los meses pedidos";
  }
  else{
    return nuevoArray;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = [];
  for (var i= 0; i <array.length; i++){
    if (array [i] > 100){
      nuevoArray.push(array [i])
    }
  }
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i= 0; i<10; i++){
    suma = suma +2;
    if (suma === i) break;
    array.push(suma);
  } 
  
  if(i<10){
    return "Se interrumpió la ejecución"
  } else{
    return array;
  }
  }


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for (var i=0; i<10; i++){
    suma = suma +2;
    if (i === 5) continue;
    array.push(suma)
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0];
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
}


function devolverUltimoElemento(array) {
  var elem = array.length - 1;
return array[elem];
}


function obtenerLargoDelArray(array) {
 return array.length;
}


function incrementarPorUno(array) {
  var matriz = [];
  for (i = 0; i<array.length; i++){
    matriz[i] = array[i] + 1;
  }
  return matriz;
}


function agregarItemAlFinalDelArray(array, elemento) {
  var final = array.length;
  array[final]=elemento;
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  var frase = palabras.join(" ");
  return frase;
  }


function arrayContiene(array, elemento) {
  for (i = 0; i < array.length; i++){
    if (array[i]==elemento) return true; 
  }
  return false;
}


function agregarNumeros(numeros) {
  suma = 0;
  for (i=0; i<numeros.length; i++){
    suma = numeros[i]+suma;
  }
  return suma; 
}


function promedioResultadosTest(resultadosTest) {
  suma = 0;
  for (i=0; i<resultadosTest.length; i++){
    suma = resultadosTest[i]+suma;
  }
  prom = (suma / resultadosTest.length);
  return prom; 
}


function numeroMasGrande(numeros) {
  save=numeros[0];
  for (i=0; i<numeros.length; i++){
    if (save<numeros[i]){
      save = numeros[i];
    }
  }
  return save;
}


function multiplicarArgumentos() {
  mult = 1;
  if (arguments.length<1) return 0; 
  for (i=0; i<arguments.length; i++){
    mult = arguments[i] * mult;
  }
  return mult;
}


function cuentoElementos(arreglo){
  cant=0;
  for (i=0; i<arreglo.length; i++){
    if (arreglo[i]>18){
      cant=cant+1;
    }
  }
  return cant;
}


function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  else return "Es dia Laboral"
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
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

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
  palabra=n.toString();
  if (palabra.charAt(0)=="9") return true;
  else return false;
}


function todosIguales(arreglo) {
  for (i=0; i<arreglo.length - 1;i++){
   if(arreglo[i+1] !== arreglo[i]) return false;
  }
  return true; 
} 


function mesesDelAño(array) {
meses = [];
for (i=0; i<array.length; i++){
    if (array[i]=="Enero"||array[i]=="Marzo"||array[i]=="Noviembre"){
      meses.push(array[i]);
  }
}
if(meses.length<3) return "No se encontraron los meses pedidos"
else return meses;
}


function mayorACien(array) {
  mayor = [];
  for (i=0; i<array.length; i++){
    if (array[i]>100){
      mayor.push(array[i]);
    }
  }
  return mayor;
}


function breakStatement(numero) {
  resul = numero;
  celda = [];
  for (i=0;i<10;i++){
    resul = resul + 2;
    if (resul === i) break;
    else{
      celda.push(resul);
    }
  }
  if(i<10) return "Se interrumpió la ejecución";
  else return celda;
}


function continueStatement(numero) {
  resul = numero;
  celda =[];
  for (i=0; i<10; i++){
    if (i == 5) continue;
    else{
      resul=resul+2;
      celda.push(resul);
    }
  }
  return celda;
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

// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x<y){
    return y;
  }
  if (y<x){
    return x;
  }
  if (y==x){
    return x; 
  }
}

function mayoriaDeEdad(edad) {
  if (edad >= 18){
    return "Allowed";
    }else{
      return "Not allowed";
    }   
  }
   
function conection(status) {
  if (status == 1){
    return "Online";
  }
  if (status == 2){
    return "Away";
  }
  if (status != 1 && status != 2){
    return "Offline";
  }
}

function saludo(idioma) {
  if (idioma == "aleman"){
    return "Guten Tag!";
  }
  if (idioma == "mandarin"){
    return "Ni Hao!";
  }
  if (idioma == "ingles"){
    return "Hello!";
  }
  if (idioma != "aleman" || idioma != "mandarin" || idioma != "ingles"){
    return "Hola!";
  }
}

function colors(color) {
  if (color == "blue"){
    return "This is blue";
  }
  if (color == "red"){
    return "This is red";
  }
  if (color == "green"){
    return "This is green";
  }
  if (color == "orange"){
    return "This is orange";
  }
  if (color != "blue" || color != "red" || color != "green" || color != "orange"){
    return "Color not found";
  }
}

function esDiezOCinco(numero) {
  if (numero == 10 || numero == 5){
    return true;
  }else{
    return false;
  }
}
function estaEnRango(numero) {
  if (numero<50 && numero>20){
    return true;
  }else{
    return false;
  }
}

function esEntero(numero) {
  if (Number.isInteger(numero)==true){
    return true;
  }else{
    return false;
  }
}

function fizzBuzz(num) {
  if (num%5 == 0 && num%3 == 0){
    return "fizzbuzz";
  }else if (num % 5 == 0){
    return "buzz";
  }else if (num%3 == 0){
    return "fizz";
  }else if (num%3 != 0 || num%5 != 0){
    return num;
  }
}


function operadoresLogicos(num1, num2, num3){
  if (num1<0 || num2<0 || num3<0){
    return "Hay negativos";
  }else if (num1==0 || num2==0 || num3==0){
    return "Error";
  }else if (num1>num2 && num1>num3 && num1>0){
    return "Número 1 es mayor y positivo";
  }else if (num3>num1 && num3>num2){
    return num3 +1;
  }else{
    return false;
  }
}

function esPrimo(numero) {
  if (numero === 0 || numero === 1 ){
  return false;
  }
  if(numero === 2){ 
  return true;
  }
  for (var i = 2; i < numero; i++){
    if (numero % i == 0){
      return false;
      }
    }
  return true;
}

function esVerdadero(valor){
  if (valor == true) return "Soy verdadero";
  if (valor == false) return "Soy falso";
}

function tablaDelSeis(){
  let mult = []
  for (let i =0; i<= 10; i++){
    mult.push(i*6)
  }
  return mult;
}

function tieneTresDigitos(numero){
  if (Math.abs(numero)<=1000 && Math.abs(numero)>=99){
    return true;
  }else{
    return false;
  }
}

function doWhile(numero) {
  var num = numero;
  var i = 0;
  do{
  i = i + 1;
  num = num + 5;
  }
  while (i < 8);
  return num;
  }
}




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};

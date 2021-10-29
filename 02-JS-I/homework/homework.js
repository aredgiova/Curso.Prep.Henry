// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Hola Mundo";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 543;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 == 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 == 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 == 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  console.log("Good day");
  return str;
}

function suma(x, y) {
  var add = x + y;
  return add;
}

function resta(x, y) {
  var sub = x -y;
  return sub;
}

function multiplica(x, y) {
  var mult = x * y;
  return mult; 
  
}

function divide(x, y) {
  var div = x/y;
  return div;
  
}

function sonIguales(x, y) {
  if (x == y) {
    return true;
  }
  return false;
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length == str2.length){
    return true;
  }
  return false;
}

function menosQueNoventa(num) {
  if (num < 90){
    return true;
  }
  return false; 
}

function mayorQueCincuenta(num) {
  if (num > 50){
    return true 
  }
  return false
}

function obtenerResto(x, y) {
  var mod = x % y;
  return mod;
}

function esPar(num) {
  if (num%2==0){
    return true; 
  }
  return false;
}

function esImpar(num) {
  if (num%2!=0){
    return true;
  }
  return false;
}

function elevarAlCuadrado(num) {
  return Math.pow(num,2);
}

function elevarAlCubo(num) {
  return Math.pow(num,3);
}

function elevar(num, exponent) {
  return Math.pow(num, exponent);
}

function redondearNumero(num) {
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  return Math.ceil(num); 
}

function numeroRandom() {
  var num_ale = Math.random();
  return num_ale; 
}

function esPositivo(numero) {
  if (numero > 0){
    return ("Es positivo");
  }if (numero < 0){
    return ("Es negativo");
  }if (numero == 0){
    return false;
  }   
}
function agregarSimboloExclamacion(str) {
  strnew = (str + "!");
  return strnew;
}

function combinarNombres(nombre, apellido) {
  strnew = (nombre + " " + apellido);
  return strnew;  
}

function obtenerSaludo(nombre) {
  strnew = ( "Hola " + nombre + "!");
  return strnew;
}

function obtenerAreaRectangulo(alto, ancho) {
  area = alto * ancho;
  return area;
}


function retornarPerimetro(lado){
  per = lado * 4;
  return per;
}


function areaDelTriangulo(base, altura){
  area = (base * altura)/2;
  return area;
}


function deEuroAdolar(euro){
  dolar = euro * 1.20;
  return dolar; 
}


function esVocal(letra){
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){
    return ("Es vocal");
  }
  if (letra.length !== 1){
    return ("Dato incorrecto");
  }
  if (letra !== "a" || letra !== "e" || letra !== "i" || letra !== "o" || letra !== "u"){
    return ("Dato incorrecto");
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};

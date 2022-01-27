// Do not change any of the function names

function mayuscula(nombre) {
    return nombre[0].toUpperCase() + nombre.slice(1);
  
  
 
}

function invocarCallback(cb) {
  cb();

}

function operacionMatematica(n1, n2, cb) {
  return cb(n1,n2);

}

function sumarArray(numeros, cb) {
  var suma = numeros.reduce(function(acumulador, siguiente) {
    return acumulador + siguiente;
  },0);
  cb(suma);
  
}

function forEach(array, cb) {
  for(i=0;i<array.length; i++){
    cb(array[i]);
  }
}

function map(array, cb) {
  var nuevo = array.map(function(elemento){
    return cb(elemento);
  });
  return nuevo;
}

function filter(array) {
  nuevacadena=[];
  for(i=0; i<array.length;i++){
    if(array[i][0]==="a"){
      nuevacadena.push(array[i])
    }
  }
  return nuevacadena;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

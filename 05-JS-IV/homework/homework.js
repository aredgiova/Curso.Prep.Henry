// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  datos = {
    nombre : nombre,
    edad : edad,
    meow: function(){
      return "Meow!";
    }
  };
  return datos;
}


function agregarPropiedad(objeto, property) {
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  multi = objetoMisterioso["numeroMisterioso"] * 5;
  return multi;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  datos = {
    nombre: nombre,
    email: email,
    password: password 
  };
  return datos;
}

function tieneEmail(usuario) {
  if (usuario["email"]) return true;
  else return false;
}



function tienePropiedad(objeto, propiedad) {
  if (objeto[propiedad]) return true;
  else return false;
}

function verificarPassword(usuario, password) {
  if (usuario.password == password) return true;
  else return false;
}

function actualizarPassword(usuario, nuevaPassword) {
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
 for (i=0; i<usuarios.length; i++){
   usuarios[i].esPremium = true;
 }
 return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  sum = 0;
  for (i=0; i<usuario.posts.length; i++){
    sum = sum + usuario.posts[i].likes;
  }
  return sum;
}

function agregarMetodoCalculoDescuento(producto) {
  producto={
    calcularPrecioDescuento: function (){
      
    }
  }
    
  }
  return producto;
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};

function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  if (propiedad in objeto) {
    return true;
  } else 
    return false;
}

module.exports = tienePropiedad;

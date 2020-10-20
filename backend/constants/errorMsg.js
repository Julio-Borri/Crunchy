const errorMsgs = {
  invalidPass: 'El password debe tener al menos 6 carácteres y es obligatorio',
  invalidUser: 'El nombre de usuario es obligatorio',
  dbCnnFail: 'Error al conectarse a la base de datos',
  dbNewUserFail: 'No se pudo crear el usuario, por favor hable con el admin',
  dbUserAlreadyExist: 'Ya esxiste un usuario con ese nombre',
  dbUserNotExist: 'EL usuario no existe',
  dbInvalidPass: 'La contraseña ingresada no es correcta',
  dbJWTFail: 'No se pudo generar el token',
};

module.exports = errorMsgs;

const jwt = require('jsonwebtoken');
const { dbJWTFail } = require('../constants/errorMsg');

const generateJWT = (uid, user) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, user };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        }
        resolve(token);
      },
    );
  });
};

module.exports = {
  generateJWT,
};

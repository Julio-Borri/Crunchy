const express = require('express');
const { check } = require('express-validator');
const { invalidUser, invalidPass } = require('../constants/errorMsg');

const router = express.Router();

const { userCreate, userLogin, renewToken } = require('../controllers/auth');
const { fieldsValidator } = require('../middlewares/fieldsValidator');

// New user
router.post(
  '/new',
  [
    check('user', invalidUser).not().isEmpty(),
    check('pass', invalidPass).isLength({ min: 6 }),
    fieldsValidator,
  ],
  userCreate,
);

// Login
router.post(
  '/',
  [
    check('user', invalidUser).not().isEmpty(),
    check('pass', invalidPass).isLength({ min: 6 }),
    fieldsValidator,
  ],
  userLogin,
);

// Renew Token
router.get('/renew', renewToken);

module.exports = router;

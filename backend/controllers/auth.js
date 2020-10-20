const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../providers/jwt');

const {
  dbNewUserFail,
  dbUserAlreadyExist,
  dbUserNotExist,
  dbInvalidPass,
} = require('../constants/errorMsg');

// New user
const userCreate = async (req, res) => {
  const { user, pass } = req.body;

  try {
    // Check if user already exist
    let newUser = await User.findOne({ user });

    if (newUser) {
      return res.status(400).json({
        ok: false,
        msg: dbUserAlreadyExist,
      });
    }

    newUser = new User(req.body);

    // Encrypt pass
    const salt = bcrypt.genSaltSync();
    newUser.pass = bcrypt.hashSync(pass, salt);

    await newUser.save();

    //Generate JWT
    const token = await generateJWT(newUser.id, newUser.user);

    res.status(201).json({
      ok: true,
      uid: newUser.id,
      name: newUser.user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msq: dbNewUserFail,
    });
  }
};

// Login
const userLogin = async (req, res) => {
  const { user, pass } = req.body;

  try {
    // Check for user exist
    const logUser = await User.findOne({ user });

    if (!logUser) {
      return res.status(400).json({
        ok: false,
        msg: dbUserNotExist,
      });
    }

    // Confirm pass
    const validPassword = bcrypt.compareSync(pass, logUser.pass);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: dbInvalidPass,
      });
    }

    // Generate JWT
    const token = await generateJWT(logUser.id, logUser.user);

    res.json({
      ok: true,
      uid: logUser.id,
      name: logUser.user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msq: dbInvalidPass,
    });
  }
};

const renewToken = (req, res) => {
  res.json({ ok: true });
};

module.exports = {
  userCreate,
  userLogin,
  renewToken,
};

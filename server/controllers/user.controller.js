const bcrypt = require('bcrypt');
const uuid = require('uuid');
const models = require('../models');
const { generateAuthToken } = require('../utils/authHelpers.js');
const User = require('../models/User');
const Signal = require('../models/Signal');

exports.RegisterUser = async (req, res) => {
  try {
    const { email, password, username, firstName } = req.body;

    const user = await User.findOne({ username });
    const hashedPassword = await bcrypt.hash(password, 12);

    if (user) {
      throw new Error({ username: 'Username is taken' });
    }

    const userId = uuid.v4();

    const newUser = new User({
      userId,
      firstName,
      username,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    });

    const savedUser = await newUser.save();
    const token = await generateAuthToken(username);

    res.status(201).send({ user: savedUser, token });
  } catch (e) {
    res.status(500).send({ errors: e.message });
  }
};

exports.LoginUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.toLowerCase();
    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      throw new Error('Invalid email or password');
    }
    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      throw new Error('Invalid email or password');
    }

    // // Returning true returns the plain object, and plain: true is to return the object itself without including unnecessary data.
    const userUpdated = await models.User.update(
      { lastSeen: new Date().toISOString() },
      { where: { email }, returning: true, plain: true },
    );

    // // The response sent to the front end is userUpdated[1].dataValues because it is where Sequelize holds the user data
    const token = await generateAuthToken(user.userId);
    res.status(200).send({ user: userUpdated[1].dataValues, token });
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
};

exports.LogoutUser = async (req, res) => {
  const { email } = req.body;
  await models.User.update(
    { lastSeen: new Date().toISOString() },
    { where: { email } },
  );
  res.clearCookie('authToken');
  res.sendStatus(204);
};

exports.AddSignal = async (req, res) => {
  try {
    const { signal } = req.body;
    if (!signal) {
      throw new Error({ username: 'No signal' });
    }
    const newSignal = new Signal({
      type: signal,
      createdAt: new Date().toISOString(),
    });

    const savedSignal = await newSignal.save();
    res.status(200).send({ signal: savedSignal });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e.message);
  }
};

exports.GetSignals = async (req, res) => {
  const signals = await Signal.find();
  res.status(200).send({ signals: signals });
};

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const User = require('../models/User');

exports.authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const encodedToken = authHeader.split('Bearer ')[1];
    if (encodedToken) {
      try {
        const token = await jwt.verify(encodedToken, JWT_SECRET);
        if (token) {
          const user = await User.findOne({
            where: { userId: token.userId },
          });
          if (!user) {
            return res.status(500).send('Unauthorised, please login');
          }
          req.user = user.dataValues;
          req.token = token;
          next();
        }
      } catch (e) {
        res.status(500).send(e);
      }
    }
  } else {
    return res.status(500).send('Authorisation header must be provided');
  }
};

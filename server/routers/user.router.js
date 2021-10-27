const router = require('express').Router();

const {
  RegisterUser,
  LoginUser,
} = require('../controllers/user.controller.js');

router.post('/signin', RegisterUser);
router.post('/login', LoginUser);

module.exports = router;

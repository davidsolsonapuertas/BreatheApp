const router = require('express').Router();

const {
  RegisterUser,
  LoginUser,
  AddSignal,
  GetSignals,
} = require('../controllers/user.controller.js');

router.post('/signin', RegisterUser);
router.post('/login', LoginUser);
router.post('/signal', AddSignal);
router.get('/getSignals', GetSignals);

module.exports = router;

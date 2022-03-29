var express = require('express');
var router = express.Router();
const index_controller = require('../controller/index_controller');


router.post('/sign-up',index_controller.SignUp);
router.post('/sign-in',index_controller.SignIn);


module.exports = router;

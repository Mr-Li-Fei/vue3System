const express = require('express');
const UserController = require('../../controllers/admin/UserController.js');
const router = express.Router();

router.post('/user/login', UserController.login);

module.exports = router;
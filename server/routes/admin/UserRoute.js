const express = require('express');
const UserController = require('../../controllers/admin/UserController.js');
const router = express.Router();

router.post('/user/login', UserController.login);
router.get('/user/list', () => {
    res.send('ok');
})

module.exports = router;
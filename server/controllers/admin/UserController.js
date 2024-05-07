const UserService = require("../../services/admin/UserService");

const UserController = {
    login: (req, res) => {
        // TODO::
        const result = UserService.login(req.body);
        console.log(result.length);
        if(result.length === 0) {
             res.send({
                code: -1,
                error: '用户名或密码不匹配!',
             });
             return;
        }

        res.send({
            ActionType: 'OK',
        });
    }
}

module.exports = UserController;
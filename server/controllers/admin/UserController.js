const UserService = require("../../services/admin/UserService");

const UserController = {
    // 数据库查询操作是异步， 一定要加上async ... await ..., 否则讲获取不到结果
    login: async (req, res) => {
        // TODO::
        const result = await UserService.login(req.body);
        console.log('run');
        if(result.length === 0) {
            // 返回401 statusCode, 
             res.status('401').send({
                status: -1,
                error: 'username or password is not correct!',
             });
             return;
        }
        res.send({
            status: 1,
            msg: 'Login successfully',
        });
    }
}

module.exports = UserController;
const UserModal = require("../../modals/UserModal")

const UserService = {
    login: ({username, password}) => {
        // 通过传过来得req.body， 查询验证username，password, 返回查询结果
        const result = UserModal.find({
            username,
            password,
        })
        console.log(result);
    }
}

module.exports = UserService;
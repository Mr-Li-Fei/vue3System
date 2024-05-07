// 引入mongoose
const mongoose = require("mongoose");

//引入schema
const Schema = mongoose.Schema;

const UserType = {
    username: String,
    password: String,
    gender: Number, // 0,1,2 分别代表保密，男， 女
    intro: String, 
    role: Number, // 1 stands for Administrator, 2 stands for visitor 
}

// 创建模型
const UserModal = mongoose.model('User', new Schema(UserType));

module.exports = UserModal;
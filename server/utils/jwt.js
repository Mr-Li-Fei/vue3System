const jsonwebtoken = require('jsonwebtoken');

// 使用jsonwebtoken生成和验证token两个方法

const secret = {name: 'bruce'};
const jwt = {
    generate(value, expires) {
        jsonwebtoken.sign(value, secret, { expiresIn: expires})
    },
    verify() {
        jsonwebtoken.verify(token, secret);
    }
};

module.exports = jwt;
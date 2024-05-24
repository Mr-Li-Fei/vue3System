const jsonwebtoken = require('jsonwebtoken');

// 使用jsonwebtoken生成和验证token两个方法

const secret = '96...69';
const jwt = {
    generate(value, expires) {
        return jsonwebtoken.sign(value, secret, { expiresIn: expires})
    },
    verify(token) {
        return jsonwebtoken.verify(token, secret);
    }
};

module.exports = jwt;
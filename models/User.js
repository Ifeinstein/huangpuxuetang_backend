const db = require('../db');

module.exports = db.defineModel('user', {
    phone: {
        type: db.INTEGER(20),
        unique: true,
    },
    openid: db.STRING(100),
    unionid: db.STRING(100),
    nickname: db.STRING(100),
    gender: db.BOOLEAN,
    language: db.STRING(100),
    city: db.STRING(100),
    province: db.STRING(100),
    country: db.STRING(100),
	avatarUrl: db.STRING(100),
	session_key: db.STRING(100)
});

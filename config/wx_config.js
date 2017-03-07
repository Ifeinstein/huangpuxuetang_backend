const request = require('request-promise');

var config = {
    appid: 'wx0b8ce710f19353c2', //微信小程序appid
    secret: '2c73b452847be8887d4f6bc4bf4c171c', //微信小程序secret
    user_info: (code) => {
        return new Promise(function(resolve, reject) {
            request(`https://api.weixin.qq.com/sns/jscode2session?appid=${config.appid}&secret=${config.secret}&js_code=${code}&grant_type=authorization_code`,
                function(err, res, body) {
                    if (!err && res.statusCode == 200) {
                        resolve(body);
                    }
                }
            );
        })
    }
};

module.exports = config;

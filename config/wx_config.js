const request = require('request');

var config = {
    appid: 'wx0b8ce710f19353c2', //微信小程序appid
    secret: '2c73b452847be8887d4f6bc4bf4c171c', //微信小程序secret
    user_info: (code) => {
    	let user_info = {};

    	request(`https://api.weixin.qq.com/sns/jscode2session?appid=${config.appid}&secret=${config.secret}&js_code=${code}&grant_type=authorization_code`,
    	    function(err, res, body) {
    	        if (!err && res.statusCode == 200) {
    	            user_info = body;
    	            console.log(body) // 打印google首页
    	        }
    	    }
    	);

    	return user_info;
    }
};

module.exports = config;
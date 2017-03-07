const model = require('../../model');
const wx_config = require('../../config/wx_config');

let User = model.User;

var register = async(ctx, next) => {

    let find_user = await model.User.findAll({
        where: {
            phone: ctx.query.phone
        }
    });

    if (find_user.length != 0) {
        ctx.response.body = JSON.stringify({
            create_user: false,
            message: "此手机号已被注册！"
        });
    } else {
        let user_info = '';

        user_info = JSON.parse(await wx_config.user_info(ctx.query.code));

        let create_user = await model.User.create({
            "phone": ctx.query.phone || "",
            "openid": user_info.openid || "",
            "unionid": user_info.unionid || "",
            "session_key": user_info.session_key || "",
            "nickname": user_info.nickname || "",
            "gender": user_info.gender || "",
            "language": user_info.language || "",
            "city": user_info.city || "",
            "province": user_info.province || "",
            "country": user_info.country || "",
            "avatarUrl": user_info.avatarUrl || "",
        });
        console.log('create:' + JSON.stringify(create_user));
        ctx.response.body = JSON.stringify({
            create_user: true,
            message: "注册成功！"
        });
    }
}


module.exports = {
    'POST /register': register,
}

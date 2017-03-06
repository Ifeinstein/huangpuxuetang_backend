const model = require('../../model');
const wx_config = require('../../config/wx_config');

var register = async(ctx, next) => {

    let find_user = await model.User.findAll({
        where: {
            phone: body.phone
        }
    });

    if (find_user.length) {
        await ctx.response.body = JSON.stringify({
            create_user: false,
            message: "此手机号已被注册！"
        });
    } else {
        let user_info = wx_config.user_info(code);
        let create_user = await model.User.create({
            "phone": ctx.request.body.phone,
            "openiId": user_info.openiId,
            "unionId": user_info.unionId || "",
            "nickName": user_info.nickName || "",
            "gender": user_info.gender || "",
            "language": user_info.language || "",
            "city": user_info.city || "",
            "province": user_info.province || "",
            "country": user_info.country || "",
            "avatarUrl": user_info.avatarUrl || "",
            "session_key": user_info.session_key
        });
        console.log('create:' + JSON.stringify(create_user));
        await ctx.response.body = JSON.stringify({
            create_user: true,
            message: "注册成功！"
        });
    }
}


module.exports = {
    'POST /register': register,
}

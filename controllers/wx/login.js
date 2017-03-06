const passport = require('koa-passport');

var login = async(ctx, next) => {

    let middleware = passport.authenticate('local', async(user, info) => {
        if (user === false) {
            ctx.response.body = JSON.stringify({
                is_reg: false
            });
        } else {
            await ctx.login(user);
            ctx.response.body = JSON.stringify({
                is_reg: true
            });
        }
    })
    await middleware.call(this, ctx, next)
}


module.exports = {
    'POST /login': login,
}

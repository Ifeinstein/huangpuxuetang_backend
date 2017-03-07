const passport = require('koa-passport');
const model = require('./model');
const wx_config = require('./config/wx_config');

let User = model.User;

passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(async function(id, done) {
    try {
        const user = await User.findOne({ where: { id: id } })
        done(null, user)
    } catch (err) {
        done(err)
    }
})

const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy({
    usernameField: 'code',
    passwordField: 'password'
}, async function(code, password, done) {
    // let user_info = JSON.parse(await wx_config.user_info(code));
    let user = await User.findOne({ where: { openid: user_info.openid } });
    console.log(user_info);
    console.log(user);
    if (user) {
        done(null, user)
    } else {
        done(null, false)
    }
}))

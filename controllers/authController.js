const passport = require('passport');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../jwtConfig')

module.exports = {
    async index(req, res, next) {
        passport.authenticate('login', async (err, user, info) => {
            try {
                if (err || !user) {
                    return next(info);
                }
                req.login(user, { session: false }, async (error) => {
                    if (error) return next(info)
                    //We don't want to store the sensitive information such as the
                    //user password in the token so we pick only the email and id
                    const body = { _id: user._id, username: user.username };
                    //Sign the JWT token and populate the payload with the user email and id
                    const token = jwt.sign({ user: body }, jwtSecret.secret, {
                        expiresIn: '1d' // expires in 1 day
                    });
                    //Send back the token to the user
                    return res.json({ token, info, userId: user._id });
                });
            } catch (error) {
                return next(info);
            }
        })(req, res, next);
    }
}
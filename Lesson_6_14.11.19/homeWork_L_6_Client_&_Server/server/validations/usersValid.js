const Joi = require('@hapi/joi');

const userSchema = Joi.object({
    userName: Joi.string().min(5).max(10).required(),
    email: Joi.string().pattern(/\S+@\S+\.\S+/),
    password: Joi.string().min(8).max(16).required()
});

function userValid(req, res, next) {
    const {
        error
    } = userSchema.validate(req.body);
    if (error) return res.json({
        error
    });
    next();
}

module.exports = userValid;
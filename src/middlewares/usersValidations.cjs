const Joi = require('joi');
const { statusCode } = require('../helpers/constants.cjs');

const userSchema = Joi.object({
    name: Joi.string()
        .required()
        .min(2)
        .max(50)
        .pattern(/^[A-Za-z\s]+$/)
        .label('Valid name (letters and spaces only, 2-50 characters)'),
    email: Joi.string()
        .email()
        .required()
        .regex(/.*@.*\.com$/)
        .label('Valid email address'),
    phone: Joi.string()
        .required()
        .regex(/^\+?\d{1,3}\s?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/)
        .label('Valid phone number'),
    age: Joi.number()
        .integer()
        .min(0)
        .max(200)
        .required()
        .label('Valid age between 0 and 200 years'),
});

const validateData = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res
                .status(statusCode.BAD_REQUEST)
                .json({ error: error.details[0].message });
        }
        next();
    };
};

module.exports = { userSchema, validateData };

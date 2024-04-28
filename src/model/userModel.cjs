const { required } = require('joi');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            validate: {
                validator: function (value) {
                    return /^(\+38)?\d{10}$/.test(value);
                },
                message: (props) => `${props.value} is not valid phone number!`,
            },
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = { User };

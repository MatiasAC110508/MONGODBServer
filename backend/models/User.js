const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:[true, 'The name is mandatory'],
        trim: true
    },
    email: {
        type: String,
        required:[true, 'The email is mandatory'],
        trim: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema)
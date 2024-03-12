const mongoose = require('../config/conexao');

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    senha: {
        type: String,
        required: true,
        minlength: 6
    },
    foto: {
        type: String,
        required: true
    }
});

const usuario = mongoose.model('usuario', usuarioSchema);

module.exports = usuario
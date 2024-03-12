// /LocalFund/model/Post.js
const mongoose = require('../config/conexao');

const postSchema = new mongoose.Schema({
    titulo: String,
    texto: String,
    data: { type: Date, default: Date.now },
    foto: String,
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario'
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

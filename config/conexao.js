// /LocalFund/config/conexao.js
const mongoose = require('mongoose');
const banco = "mongodb+srv://DedierJr:dedier2005@cluster0.wemjdzs.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
require('dotenv').config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("base de datos ON")
    } catch {
        console.log("No se pudo conectar a la base de datos")
    }
}

module.exports = {connect}
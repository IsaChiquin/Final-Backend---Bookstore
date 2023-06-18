const mongoose = require ('mongoose')

const Schema = mongoose.Schema;
const bookstoreSchema = new Schema({
    autor:{
        type: String,
        required: true
    },
    año:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    stock:{
        type: Boolean,
        required: true
    }
})

const Bookstore = mongoose.model('Bookstore', bookstoreSchema);
module.exports = {Bookstore}
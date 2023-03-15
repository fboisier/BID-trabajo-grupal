const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        minlength:[13, 'El minimo es de 13'] 
    },
    apellido: { type: String },
    edad: {type: Number},
    cantidad: {type: Number},
}, { timestamps: true });
module.exports.Person = mongoose.model('Person', PersonSchema);


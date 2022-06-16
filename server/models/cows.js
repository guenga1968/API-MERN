const mongoose = require('mongoose');
const { Schema } = mongoose;

const cowsSchema = new Schema({
    idSenasa: {type: String, required: true,length: 16},
    animal:{type: String, required: true},
    peso:{type: Number, required: true, min: 0, max: 9999},
    potrero:{type: String, required: true, maxlength:200},
    dispositivo:{type: String, required: true},
    nroDispositivo:{type: String, required: true, length: 8}
});

module.exports = mongoose.model('cow', cowsSchema);


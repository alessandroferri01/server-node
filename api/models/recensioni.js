const mongoose = require('mongoose');

const recensioneSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    rating: String,
})

module.exports = mongoose.model('Recensione', recensioneSchema);
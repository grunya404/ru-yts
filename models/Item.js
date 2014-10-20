var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    time: {
        type: Number
    },
    link: {
        type: String
    },
    movieId: {
        type: String
    },
    size: {
        type: Number
    },
    hash: {
        type: String,
        unique: true
    },
    image: {
        type: String
    },
    genre: {
        type: String
    },
    year: {
        type: Number
    }
});

module.exports = mongoose.model('Item', itemSchema);
const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    author:String,
    image:String,
    description:String,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Quotes', HomeSchema);
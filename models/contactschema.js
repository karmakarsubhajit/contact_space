const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    id:Number,
    name: String,
    phone: String,
    country: String,
    gender:String
});

module.exports = mongoose.model('Contacts',ContactSchema);


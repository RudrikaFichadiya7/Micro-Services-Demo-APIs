const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    owner: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Product', productSchema);
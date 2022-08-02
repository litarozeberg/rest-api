const mongoose = require("mongoose")
const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    address: {
        type: String,
        required: true,
        minlength: 2,
    },
    description: {
        type: String,
        required: true,
        minlength: 2,
    },
    phone: {
        type: String,
        required: true,
        minlength: 9,
        maxlengh: 10,
    },
    image: {
        type: String,
        required: true,
    },
    cardNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true,
    }

});

const Card = mongoose.model("cards", cardSchema)
module.exports = { Card }
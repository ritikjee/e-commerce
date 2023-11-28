"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const itemSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, 'Please enter a description']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price']
    },
    image: {
        type: String,
        required: [true, 'Please enter an image']
    },
    category: {
        type: String,
        required: [true, 'Please enter a category']
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});
const Item = (0, mongoose_1.model)('Item', itemSchema);
exports.default = Item;

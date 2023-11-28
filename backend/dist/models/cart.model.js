"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        required: true
    },
    items: [
        {
            itemId: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});
const Cart = (0, mongoose_1.model)('Cart', cartSchema);
exports.default = Cart;

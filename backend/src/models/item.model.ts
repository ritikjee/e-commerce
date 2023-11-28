import { Schema , model } from "mongoose";

interface ItemInterface {
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    dateAdded: Date;
}

const itemSchema = new Schema<ItemInterface>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true,'Please enter a description']
    },
    price: {
        type: Number,
        required: [true,'Please enter a price']
    },
    image: {
        type: String,
        required: [true,'Please enter an image']
    },
    category: {
        type: String,
        required: [true,'Please enter a category']
    },
    dateAdded: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
})

const Item = model<ItemInterface>('Item', itemSchema)

export default Item;
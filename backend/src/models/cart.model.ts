import { Schema , model } from "mongoose";

interface CartInterface {
    userId: string;
    items: Array<{}>;
    bill: number;
}


const cartSchema = new Schema<CartInterface>({
    userId: {
        type: String,
        required: true
    },
    items:[
        {
            itemId: {
                type: String,
                required: true
            },
            name:{
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price:{
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
},
{
    timestamps: true
})

const Cart = model<CartInterface>('Cart', cartSchema)

export default Cart;

import { Schema , model } from "mongoose";

interface OrderInterface {
    userId: string;
    items: Array<{}>;
    bill: number;
}

const orderSchema = new Schema<OrderInterface>({
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


const Order = model<OrderInterface>('Order', orderSchema)

export default Order;
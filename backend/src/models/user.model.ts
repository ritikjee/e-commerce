import {Schema , model} from 'mongoose'


interface UserInterface {
    username: string;
    password: string;
    email: string;
    registerDate: Date;
}

const userSchema = new Schema<UserInterface>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    registerDate: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
})

const User = model<UserInterface>('User', userSchema)

export default User
import { connect } from 'mongoose'

export default async function connectDB() {
    const dbURI = process.env.MONGO_URI

    try {
        await connect(dbURI!)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

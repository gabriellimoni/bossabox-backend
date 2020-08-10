import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const mongodbUri: string = String(process.env.MONGODB_URI)

export default mongoose.connect(mongodbUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
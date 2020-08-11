import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const mongodbUri: string = String(process.env.MONGODB_URI)
const mongodbDatabase: string = String(process.env.MONGODB_DATABASE)

console.log('DATABASE:', mongodbUri, mongodbDatabase)

export default {
    connect () {
        return mongoose.connect(mongodbUri, { 
            useNewUrlParser: true, 
            useCreateIndex: true, 
            useUnifiedTopology: true, 
            dbName: mongodbDatabase 
        })
    }
}
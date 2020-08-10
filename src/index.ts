require('dotenv').config()

import express from'express'
import database from './database'
import routes from './routes'

const port = process.env.PORT

database
.then(loadServer)
.catch(errorLoadingServer)

function loadServer () {
    const app: express.Application = express()
    
    app.use('/api/v1', routes)
    
    app.listen(port, function () {
        console.log('App is listening on port ', port)
    })
}

function errorLoadingServer (err: Object) {
    console.error('Error connecting to database')
    console.error(JSON.stringify(err))
}
require('dotenv').config()

import express from'express'
import database from './database'
import routes from './routes'
import bodyParser from 'body-parser'

const port = process.env.PORT

database
.then(loadServer)
.catch(errorLoadingServer)

function loadServer () {
    const app: express.Application = express()
    
    app.use(bodyParser.json())
    app.use('/api/v1', routes)
    
    app.listen(port, function () {
        console.log('App is listening on port ', port)
    })
}

function errorLoadingServer (err: Object) {
    console.error('Error connecting to database')
    console.error(JSON.stringify(err))
}
require('module-alias/register')
require('dotenv').config()

import express from'express'
import database from './database'
import routes from './routes'
import bodyParser from 'body-parser'
import cors from 'cors'

const port = process.env.PORT

database.connect()
.then(loadServer)
.catch(errorLoadingServer)

function loadServer () {
    const app: express.Application = express()
    
    app.use(bodyParser.json())
    app.use(cors())
    app.use('/api/v1', routes)

    app.use('/', async (req, res) => res.send('Hello GAE'))
    
    app.listen(port, function () {
        console.log('App is listening on port ', port)
    })
}

function errorLoadingServer (err: Object) {
    console.error('Error connecting to database')
    console.error(JSON.stringify(err))
}
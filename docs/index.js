const express = require('express')
const app = express()
const expressSwagger = require('express-swagger-generator')(app)

let options = {
    swaggerDefinition: {
        info: {
            description: 'Documentação da API para teste do Bossa Box',
            title: 'Tools API',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/api/v1',
        produces: [
            "application/json",
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'x-access-token',
                description: "Token de acesso gerado na rota /login",
            }
        }
    },
    basedir: __dirname,
    files: ['./routes/**/*.js']
}
expressSwagger(options)
app.listen(5000, function () { console.log('Running docs on localhost:5000/api-docs') })

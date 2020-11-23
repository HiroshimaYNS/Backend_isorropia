const express = require('express');
const app = express('');
const routes = require('./routes/routes')


//Ajustes
app.set('port', 4000);
require('dotenv').config()


//Middlewares
app.use(express.json());


//Routes
app.get('/', (req, res) => {
    res.send('Primeros acercameintos a servicios de backend')
})
app.use('/api', routes)


//Ajustes de servidor
app.listen(app.get('port'), () => {
    console.log(`Tamo activo en el puerto ${app.get('port')}`)
})


/*Cosas que debo poner :,v
{
"version": 2,
"name": "api-fake-mediatecapp",
"builds": [{ "src": "index.js", "use": "@now/node-server" }],
"routes": [
    {
    "src": "/(.*)",
    "dest": "/index.js"
    }
]
}

"now:deploy": "now"*/
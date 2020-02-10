/*
    Para hacer un servicio rest de una manera más rápida, debemos usar express
    Esta librería nos ayudará a crear el servicio muchísimo más rápido
    Solo necesitamos importar la librería

    const express = require("express")

    const app = express()

    Y listo, eso es todo, si necesitamos hacer un servicio con el método GET

    hacemos lo siguiente

    app.get('URL-HERE', callBack-action)


    EJ:

    app.get('/', (req, res) => {})

    y si queremos imprimir algo en la app, solo debemos escribir 

    res.send()

    // Si es JSON no importa, el paquete se encarga de hacerlo solo


    Y por último, agregamos el puerto que estemos escuchando, EJ:

    app.listen(3000)

    __dirname = todo el path del url

*/

const express = require('express')
const app = express()
const hbs = require('hbs');
require("./hbs/helpers/helpers");

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/parciales');

app.use(express.static(__dirname + '/public'))


// Express HBS engine
app.set('view engine', 'hbs');

const year = new Date().getFullYear();

app.get('/', (req, res) => {
    res.render('home', { nombre: 'andrés carrillo' });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port)
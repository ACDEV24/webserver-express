const http = require('http');

/**
    Http nos permite crear un server de manera rápida
    para empezar, creamos el servidor con el método http.createServer()

    el cual recibe por parametros un callBack
    el cual tiene un parámetro para las acciones del método
    y otro para las respuestas

    el método res.whiteHead(answer, {data})

    Es para colocar la data del servicio rest
    Y el método .write es para imprimir la data en el navegador

    Si queremos imprimir un json, debemos usar el JSON.stringifi(json)
*/

http.createServer((req, res) => {

    res.writeHead(200, { "Context-type": "application/json" });

    let salida = {
        nombre: "Andres Carrillo",
        edad: 32,
        url: req.url
    }

    res.write(JSON.stringify(salida));
    res.end();

}).listen(8080);

console.log("Escuchando puerto 8080");
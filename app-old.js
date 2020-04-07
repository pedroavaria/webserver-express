const http = require('http')

http.createServer((req,res) => {

    res.writeHead(200,{'Content-Type': 'application/json'})

    let salida = {
        nombre: 'Pedro',
        edad: 32,
        url: req.url
    }
    res.write(JSON.stringify(salida))
    //resp.write('Hola Mundo')
    res.end()
})
.listen(8080)


console.log('Escuchando el puerto 8080');
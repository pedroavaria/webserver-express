const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers')
app.use( express.static( __dirname + '/public' ) )

const port = process.env.PORT || 3000

// Express HBS

hbs.registerPartials( __dirname + '/views/parciales')
app.set('View engine', 'hbs')

// helpers



app.get('/', (req, res) => {
    //res.send('Hola Mundo')

    res.render('home.hbs',{
        nombre: "pedro"
    })
})

app.get('/about', (req, res) => {
    //res.send('Hola Mundo')

    res.render('about.hbs')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})
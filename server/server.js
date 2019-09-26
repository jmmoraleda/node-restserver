require('./config/config');

const express = require('express');
const mongoose = require('mongoose');


const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(require('./routes/usuario'));



// mongoose.connect(process.env.URLDB, (err, res) => {

//     if (err) throw err;

//     console.log('Base de datos ONLINE');

// });

// La configuración de userNewUrlParser y useCreateIndex es una actualización del curso por lo que hay que dejarlo siempre
mongoose.connect(process.env.URLDB, { userNewUrlParser: true, useCreateIndex: true },
    (err, res) => {

        if (err) throw err;

        console.log('Base de datos ONLINE');

    });



app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});
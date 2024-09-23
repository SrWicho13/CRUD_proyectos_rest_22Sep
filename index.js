// Express:
// Body-Parser:
const express = require('express');
const bodyParser = require('body-parser');

const projectRoutes = require('./routes/projectRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/projects', projectRoutes);

//Puerto para correr el programa
const PORT = 3000;

app.listen(
    PORT,
    () =>{ console.log('Mira viejon, el servidor ya esta corriendo en el puerto 3000.') }
)

module.exports = app;
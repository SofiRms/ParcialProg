//Librerias instaladas
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
require('ejs');

const dbConnect = require('./src/db/db');//futura conexion
require('dotenv').config()

// express y conexión la base de datos
const app= express();
dbConnect();

//config de port
const port = 3000 | 4000;

//comprension de json
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//middlwares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'src/public')));

//Motor de plantillas ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Importacion de rutas
app.use(require('./src/routes/user.routes'))
app.use(require('./src/routes/task.routes'))
app.use(require('./src/routes/auth.routes'))

//config del puerto
app.listen(port, ()=> console.log(`Servidor escuchando en: ${port}`));

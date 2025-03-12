// src/app.js

const express = require('express');
const users = require('./routes/users');
const dotenv = require('dotenv');
const path = require('path');
const session = require('express-session');

dotenv.config();

const app = express();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}));

app.set('view engine', 'ejs');  // Establece el motor de plantillas
app.set('views', path.join(__dirname, 'views'));  // Directorio de las vistas

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  //Necesario para procesar los formularios

// Rutas
app.use('/', users);

module.exports = app;
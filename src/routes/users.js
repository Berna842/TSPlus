// src/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

// Rutas de usuarios
router.get('/', userController.login); // Ruta para visualizar el Login
router.get('/registro', userController.reg); // Ruta para visualizar el Registro
router.get('/dashboard', userController.dashboard);


module.exports = router;

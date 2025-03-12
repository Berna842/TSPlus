// src/controllers/users.js

const usersService = require('../services/users');

const login = async (req, res) => {
    try {
        res.render('login'); // Redirigir al panel de administración
    } catch (err) {
        res.status(400).json({ message: 'Error login', error: err.message });
    }
};

const reg = async (req, res) => {
    try {
        res.render('registro'); // Redirigir al panel de administración
    } catch (err) {
        res.status(400).json({ message: 'Error login', error: err.message });
    }
};

const dashboard = async (req, res) => {
    try {
        res.render('dashboard'); // Redirigir al panel de administración
    } catch (err) {
        res.status(400).json({ message: 'Error login', error: err.message });
    }
};


module.exports = {
    login,
    reg,
    dashboard,
};

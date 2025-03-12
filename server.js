const app = require('./src/app');
const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
dotenv.config();

const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

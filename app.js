const express = require('express');
const app = express();
const path = require('path');

// Configurar la ruta estática para la carpeta "views"
app.use(express.static(path.join(__dirname, 'views')));

// Configurar la ruta estática para la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en port:${port}`);
});

const express = require("express");
const app = express();
const path = require("path");
const routes = require("./src/routes/routes");
const bodyParser = require("body-parser");

// Middleware para parsear JSON y datos urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Servir archivos estáticos desde la carpeta 'Public'
app.use(express.static(path.join(__dirname, "src/Public")));

// Usar las rutas definidas en routes.js
app.use("/", routes);

app.use("/IniciarSesion", routes);

app.use("/IniciarSesion.html", routes);


// Indicando el puerto donde se iniciará el servidor
app.listen(3000, () => {
    console.log("El servidor está en espera de conexiones");
}); 

const path = require("path");

const controller = {};

// Definir la función como parte del objeto controller
controller.paginaPrincipal = (resquest, response)=>{
    response.sendFile(path.join (__dirname, "../view", "paginaPrincipal.html"));
    console.log("Un Cliente se ha Conectado");
};

controller.iniciarSesion = (resquest, response)=>{
    response.sendFile(path.join (__dirname, "../view", "iniciarSesion.html"));
}

controller.iniciarSesionHtml = (resquest, response)=>{
    response.sendFile(path.join (__dirname, "../view", "iniciarSesion.html"));
}

// exportar el objeto controller
module.exports = controller;




const express = require("express");
const router = express.Router();
const controller = require("../Controllers/controllers")

router.get("/", controller.paginaPrincipal);

router.get("/iniciarSesion", controller.iniciarSesion);

router.get("/IniciarSesion.html", controller.iniciarSesionHtml);

module.exports = router;
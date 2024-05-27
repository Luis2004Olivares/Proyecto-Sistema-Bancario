const express = require("express");
const router = express.Router();
const controller = require("../Controllers/controllers")
const authController = require("../Controllers/authController");

router.get("/", controller.paginaPrincipal);

router.get("/iniciarSesion", controller.iniciarSesion);

router.get("/IniciarSesion.html", controller.iniciarSesionHtml);

module.exports = router;
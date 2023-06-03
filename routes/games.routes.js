const express = require("express");
const mainController = require("../controllers/main.controller");
const router = express.Router();

// index page
router.get("/", function (req, res) {
  res.send("Ingresamos al listado");
});

// about page
router.get("/detail", function (req, res) {
  res.send("Ingresamos a detalle de un juego");
});

module.exports = router;

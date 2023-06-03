const express = require("express");
const mainController = require("../controllers/main.controller");
const router = express.Router();

// index page
router.get("/", function (req, res) {
  res.send('Ingresamos a users');
});

// about page
router.get("/profile", function (req, res) {
  res.send("Ingresamos a perfil");
});

module.exports = router;

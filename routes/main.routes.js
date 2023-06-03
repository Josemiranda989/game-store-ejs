const express = require('express');
const mainController = require('../controllers/main.controller');
const router = express.Router();

// index page
router.get("/", mainController.index);

// about page
router.get("/about", function (req, res) {
    res.json(
      "Acerca de nosotros"
  )
});

module.exports = router

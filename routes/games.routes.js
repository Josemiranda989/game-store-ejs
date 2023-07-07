const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

const gameController = require("../controllers/game.controller");
/* configuración de multer */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"../public/img"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

// index page
router.get("/", function (req, res) {
  res.send("Ingresamos al listado");
});

// detail page
router.get("/detail/:id", gameController.getDetail);

// get create form
router.get("/create", gameController.getCreateForm);
// post create
router.post("/create", upload.single("thumbnail"), gameController.postCreateForm);

// get update form
router.get("/update/:id", gameController.getUpdateForm);
// put update
router.put("/update/:id", upload.single("thumbnail"), gameController.putUpdateForm);

// get update form


module.exports = router;

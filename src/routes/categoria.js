var express = require("express");
var router = express.Router();

var categoriaController = require("../controllers/categoriaController");

router.post("/cadastrar/:categoria/:id", function (req, res) {
    categoriaController.cadastrar(req, res);
})


router.get("/ultimas", function (req, res) {
    categoriaController.buscarVoto(req, res);
})

router.get("/:id", function (req, res) {
    categoriaController.buscarId(req, res);
})

module.exports = router;
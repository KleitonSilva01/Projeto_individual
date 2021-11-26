var express = require("express");
var router = express.Router();

var categoriaController = require("../controllers/categoriaController");

router.post("/cadastrar/:categoria", function (req, res) {
    categoriaController.cadastrar(req, res);
})


router.get("/ultimas", function (req, res) {
    categoriaController.buscarVoto(req, res);
})

module.exports = router;
var categoriaModel = require("../models/categoriaModel");

function cadastrar(req, res) {
    var categoria = req.body.categoria;

      categoriaModel.cadastrar(categoria)
          .then(
              function (resultado) {
                  res.json(resultado);
              }
          ).catch(
              function (erro) {
                  console.log(erro);
                  console.log(
                      "\nHouve um erro de categoria ! Erro: ",
                      erro.sqlMessage
                  );
                  res.status(500).json(erro.sqlMessage);
              }
          );
  
}

module.exports = {
  cadastrar
}
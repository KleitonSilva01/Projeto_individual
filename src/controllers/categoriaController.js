var categoriaModel = require("../models/categoriaModel");

function cadastrar(req, res) {
    var categoria = req.params.categoria;
    var id = req.params.id;

      categoriaModel.cadastrar(categoria, id)
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

function buscarVoto(req, res) {

    categoriaModel.buscarVoto().then(function(resultado) {
        
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        }else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
        
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar ultimas categorias.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);

    });
}

function buscarId(req, res) {
    var id = req.params.id;

    categoriaModel.buscarId(id).then(function(resultado) {
        
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        }else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
        
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos Id.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);

    });
}

module.exports = {
  cadastrar,
  buscarVoto,
  buscarId
}
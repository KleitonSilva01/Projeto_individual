var database = require("../database/config");

function cadastrar(categoria) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",categoria);
  var instrucao = `
      INSERT INTO votos (fk_categoria) VALUES ('${categoria}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function buscarVoto() {
   instrucaoSql = `
   select count(fk_categoria) as 'QuantidadeVotos', categoria from votos 
   join categoria on fk_categoria = idcategoria group by fk_categoria; 
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrar,
  buscarVoto
};
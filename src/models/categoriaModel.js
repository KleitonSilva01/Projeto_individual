var database = require('../database/config');

function cadastrar(categoria, id) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    categoria,
    id
  );
  var instrucao = `
      INSERT INTO votos (fk_categoria, fk_usuario) VALUES ('${categoria}', '${id}');
  `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function buscarVoto() {
  instrucaoSql = `
   select count(fk_categoria) as 'Quantidadedevotos', categoria from votos join categoria on fk_categoria = idcategoria 
   group by fk_categoria; 
  `;
  console.log('Executando a instrução SQL: \n' + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarId(id) {
  instrucaoSql = `
  select count(fk_categoria) as 'Quantidadedevotos', categoria, id as idUsuario from votos 
	join categoria on fk_categoria = idcategoria 
    join usuario on fk_usuario = id
    where id = ${id}
    group by fk_categoria;

  `;
  console.log('Executando a instrução SQL: \n' + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrar,
  buscarVoto,
  buscarId
};

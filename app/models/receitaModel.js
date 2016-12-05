function receitaDAO(connection){
  this._connection = connection;
}

receitaDAO.prototype.getTipoReceita = function(callback){
  this._connection.query('select * from tiporeceita', callback);
}

receitaDAO.prototype.salvarTipoReceita = function(tipoReceita, callback){
  this._connection.query('insert into tipoReceita set ?', tipoReceita, callback);
}

receitaDAO.prototype.cadastrarReceita = function(dados, callback){
  console.log('chegou no model!');
  this._connection.query('insert into receita set ?', dados, callback);
  
}

module.exports = function(){
  return receitaDAO;
}

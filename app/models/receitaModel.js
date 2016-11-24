function receitaDAO(connection){
  this._connection = connection;
}

receitaDAO.prototype.getTipoReceita = function(callback){
  this._connection.query('select * from tiporeceita', callback);
}

receitaDAO.prototype.salvarTipoReceita = function(tipoReceita, callback){
  this._connection.query('insert into tipoReceita set ?', tipoReceita, callback);
}

module.exports = function(){
  return receitaDAO;
}

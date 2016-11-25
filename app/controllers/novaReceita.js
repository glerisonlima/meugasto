module.exports.index = function(app,req,res){
  
  var connection = app.config.dbConnection();
  var receitaModel = new app.app.models.receitaModel(connection);

  receitaModel.getTipoReceita(function(error, result){
    res.render('novaReceita', {validacao:{}, tipoReceitas: result});
  });
}

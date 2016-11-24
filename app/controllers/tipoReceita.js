module.exports.cadastro = function(app, req,res){
  var connection = app.config.dbConnection();
  var receitaModel = new app.app.models.receitaModel(connection);

  receitaModel.getTipoReceita(function(error, result){
    res.render('tipoReceita', {validacao:{}, receitas: result});
  });

}

module.exports.salvarTipoReceita = function(app, req, res){
  var tipoReceita = req.body;
  console.log(tipoReceita);

  req.assert('tipoReceita', 'Descrição do tipo de receita é obrigatorio').notEmpty();
  req.assert('tipoReceita','Descrição deve conter entre 5 e 100 caracteres').len(5,100);

  var erros = req.validationErrors();

  if(erros){
    res.render('tipoReceita', {validacao: erros, receitas: {}});
    return;
  }

  var connection = app.config.dbConnection();
  var receitaModel = new app.app.models.receitaModel(connection);

  receitaModel.salvarTipoReceita(tipoReceita, function(error, result){
    res.redirect('/tipoReceita');
  });
}

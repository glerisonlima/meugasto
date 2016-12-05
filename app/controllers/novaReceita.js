var tipoReceitas = {};

module.exports.index = function(app,req,res){
  var connection = app.config.dbConnection();
  var receitaModel = new app.app.models.receitaModel(connection);

  receitaModel.getTipoReceita(function(error, result){
    tipoReceitas === result;
    res.render('novaReceita', {validacao:{}, tipoReceitas: result});
  });
}

module.exports.salvarReceita = function(app,req,res){
  var dados = req.body;

  req.assert('tiporeceita','Titulo é obrigatorio').notEmpty();
  req.assert('datarecebimento','Data de recebimento é obrigatorio').notEmpty();
  req.assert('valorrecebido','Valor é obrigatorio').notEmpty();

  var erros = req.validationErrors();

  if(erros){
			//res.render("admin/form_add_noticia", {validacao: erros, noticia : noticia});
      console.log('deu erro no controller:'+erros);
			return;
		}

  var connection = app.config.dbConnection();
  var receitaModel = new app.app.models.receitaModel(connection);

  receitaModel.cadastrarReceita(dados, function(error, result){
    res.render('novaReceita', {validacao:{}, tipoReceitas:tipoReceitas});
    console.log(dados);
  });
}

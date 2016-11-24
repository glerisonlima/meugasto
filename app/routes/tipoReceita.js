module.exports = function(app){
  app.get('/tipoReceita', function(req,res){
    app.app.controllers.tipoReceita.cadastro(app,req,res);
  });

  app.post('/salvarTipoReceita', function(req, res){
    app.app.controllers.tipoReceita.salvarTipoReceita(app, req, res);
  });
}

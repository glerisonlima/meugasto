module.exports = function(app){
  app.get('/novaReceita', function(req, res){
    app.app.controllers.novaReceita.index(app,req,res);
  })

  app.post('/salvarReceita', function(req, res){
    app.app.controllers.novaReceita.salvarReceita(app,req,res);
  })
}

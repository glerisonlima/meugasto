module.exports = function(app){
  app.get('/novaReceita', function(req, res){
    app.app.controllers.novaReceita.index(app,req,res);
  })
}

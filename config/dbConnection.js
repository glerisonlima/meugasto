var mysql = require('mysql');

var connection = function(){
  console.log('conexão estabelecida!');
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'meugasto'
    });
}

module.exports = function(){
  console.log('Carregado modulo de conexão');
  return connection;
}

const mysql = require('mysql');

const connection  = mysql.createConnection({
 host:'localhost',
 port: '3306',
 user: 'root',
 password: '',
 database: ''
});

//Testa conexão com BD
/*connection.connect(err => {
       if (err) throw err;
       console.log('Conectado!');
   });*/

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados da !');
});

module.exports = connection;
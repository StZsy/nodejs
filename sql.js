var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'football_4.0_test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
})

var sql = 'select * from account_refund';
connection.query(sql, function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }

    console.log('-------------SELECT-------------');
    console.log(result);
    console.log('--------------------------------');
});

connection.end();
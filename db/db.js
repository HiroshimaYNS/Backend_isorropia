const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'br4tgujrft3rpbq7xsaw-mysql.services.clever-cloud.com',
    user: 'utgldgyvlzah2p4a',
    password:'NjaqkQQ6E5cKSg9Svb5w',
    database: 'br4tgujrft3rpbq7xsaw',
    multipleStatements: true
})

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('La base de datos esta tremenda UwU');
    }
});

module.exports = mysqlConnection;




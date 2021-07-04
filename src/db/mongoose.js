const mysql = require('mysql')

/*const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'18FFaridah',
	database:'election'
});*/
const connection = mysql.createPool({
	host:'us-cdbr-east-04.cleardb.com',
	user:'bbc63eb56e4698',
	password:'3eb46b38',
	database:'heroku_b1d40658a8fd28e'
});
/*connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});*/

module.exports = connection;




var mysql = require('promise-mysql');


var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    connectionLimit: 10
});

 
var myDbHelper = { 
    createDBAndTables: function () {
        pool.query(`CREATE DATABASE IF NOT EXISTS food`).then(data => {
            console.log(data);
            let createfoodTable = `
                CREATE TABLE IF NOT EXISTS food.name (id INT AUTO_INCREMENT PRIMARY KEY, 
                name VARCHAR(255), category INT (255), prep INT (255), img VARCHAR (255))  
             `;
            pool.query(createfoodTable).then(data => {
                console.log(data);
            });
            let createCat = `CREATE TABLE IF NOT EXISTS food.categories (id INT AUTO_INCREMENT PRIMARY KEY, 
                name VARCHAR (255))`;
            pool.query(createCat).then(data => {
                console.log(data);
            });
            let createUser = `CREATE TABLE IF NOT EXISTS food.users (id INT AUTO_INCREMENT PRIMARY KEY, 
                firstname VARCHAR (255), lastname VARCHAR (255), username VARCHAR (255), password VARCHAR (255))`;
            pool.query(createUser).then(data => {
                console.log(data);
            });
        }); 
    }, 
    myPool: pool
}
 





module.exports = myDbHelper;


























// var mysql = require('promise-mysql');


// var pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     connectionLimit: 10
// });

 
// var myDbHelper = { 
//     createDBAndTables: function () { 
//         pool.query(`CREATE DATABASE IF NOT EXISTS chat`).then(data => {
//             console.log(data);
//             let createTableQuery = `
//                 CREATE TABLE IF NOT EXISTS chat.users (id INT AUTO_INCREMENT PRIMARY KEY, 
//                 name VARCHAR(255))  
//              `;
//             pool.query(createTableQuery).then(data => {
//                 console.log(data);
//             });
//             let createMsg = `CREATE TABLE IF NOT EXISTS chat.messages (id INT AUTO_INCREMENT PRIMARY KEY, 
//                 sender_id INT (255), receiver_id INT (255), text VARCHAR (255))`;
//             pool.query(createMsg).then(data => {
//                 console.log(data);
//             });
//         }); 
//     }, 
//     myPool: pool
// }
 
// module.exports = myDbHelper;

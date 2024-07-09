const mysql = require('mysql');
const dotenv  = require('dotenv');

dotenv.config();
const connection = mysql.createConnection({
    host : process.env.DB_host,
    user : process.env.DB_user,
    password :process.env.DB_password,
    database : process.env.DB_database,
    port: process.env.DB_port,

});


connection.connect((err)=>{
    if(err)
    {
        console.log("Error connection to the mysql,err.message");
        process.exit(1);
    }
    else{
       console.log("Connected to the mysql");
    }
});
module.exports = connection;

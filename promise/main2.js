const mysql = require('mysql2/promise');
async function getCustomer(){

    let connection;
    try {
        connection = await mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "root",
            database: "test",
            port: 3309
        });
        let result = await connection.query("SELECT * FROM reviews LIMIT 2");
        console.log(result[0]);
    } catch (error) {
        console.log(error.message);
        
    }
    if (connection){
        connection.end();
    }
    
}

getCustomer();
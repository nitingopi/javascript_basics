const mysql = require('mysql2');

function getCustomers() {
    
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'test',
        port: 3309
    });

    //% Promisification of callbacks
    return new Promise((resolve, reject) => {
        //! mysql library is callback based, it does NOT return result of query
        connection.query('SELECT * FROM reviews LIMIT 2', (error, result) => {
            if (error) {
                reject(error);
            }else if (result){
                resolve(result);
            }
            connection.end();
        });
    });
}

const promise = getCustomers();
console.log("promise", promise);
promise
    .then(result => {console.log("resolved", result)})
    .catch(error => {console.log("error", error.message);});

console.log("promise", promise);
console.log("bye");




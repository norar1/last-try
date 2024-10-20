const mysql = require('mysql');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306, // Default MySQL port
    database: 'qrs',
};

const db = mysql.createPool(dbConfig);

module.exports = (query, params) => {
    return new Promise((resolve, reject) => { 
        db.query(query, params, (err, results) => {
            if (err) {
                console.log("Query error:", err);
                return reject(err);
            }
            resolve(results);
        });
    });
};

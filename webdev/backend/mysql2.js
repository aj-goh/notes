// Connection pool: reuses a fixed number of DB connections rather than opening/closing one per query
const mysql = require('mysql2');

// Configure connection pool settings
const settings = {
    host: process.env.DB_HOST,          // Hostname or IP address where MySQL server runs
    user: process.env.DB_USER,          // Database username for Node app to log in with
    password: process.env.DB_PASSWORD,  // Database password for Node app to log in with
    database: process.env.DB_DATABASE,  // Specific database for Node app to connect to
    connectionLimit: 10,                // Limit concurrent active database connections
    multipleStatements: true,           // Allow multiple SQL statements in single query
    dateStrings: true                   // Return dates as strings instead of Date objects
}

// Export connection pool to MySQL server
const pool = mysql.createPool(settings);
module.exports = pool;

// Queries
pool.query(SQLSTATEMENT, callback);          // borrows a connection, runs the query, releases it
pool.query(SQLSTATEMENT, VALUES, callback);  // for parameterised queries

SQLSTATEMENT = `SELECT * FROM users;`;
SQLSTATEMENT = `SELECT id, name FROM users;`;

SQLSTATEMENT = `SELECT * FROM users WHERE id = ?;`; // parameterised query, use "?" for placeholders
VALUES = [id];

SQLSTATEMENT = `UPDATE users SET name = ?, email = ? WHERE id = ?;`;
VALUES = [name, email, id];  // values array must match order of placeholders

const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

const dbConfig = {
    host     : 'localhost',
    user     : 'root',  // TODO ?
    password : 'Miercuri1234',
    database : 'library'
}

async function run_query(sql_code) {
    const connection = await mysql.createConnection(dbConfig);
    const [results, ] = await connection.execute(sql_code);

    return results;
}

app.get('/books', async(req, res, next) => {

    let books = run_query(`
        SELECT *
        FROM books;
    `);

    res.json(books || []);
})

app.listen(8080, "localhost");
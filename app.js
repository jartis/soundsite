// Imports
const express = require('express');
const index = require('./routes/index');

// Set hosting information
const hostname = '127.0.0.1';

let port = process.env.PORT || 8080; 

/*
const dbConfig = {
    host: 'bear.phpwebhosting.com',
    user: 'bdjcomic',
    password: [redacted],
    database: [redacted],
    port: 3306,
    charset: 'utf8mb4',
    collation: 'utf8mb4_bin'
};
*/

// // Create DB connection
// // const db = mysql.createConnection(dbConfig);

// // Connection callback for DB
// function connectCallback(error){
//     if (error) {
//         throw error;
//     }

//     console.log('Connected to the database');
// }

// db.connect(connectCallback);

// // Set global database variable
// global.db = db;

// Initialize
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('res'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Set routes
app.get('/', index.getHomePage);
app.get('/:egg', index.getHomePage);
// app.post('/add/:pid', puzzles.addAnswer);

function listenCallback() {
    console.log(`Listening on http://${hostname}:${port}`);
}

app.listen(port, listenCallback);

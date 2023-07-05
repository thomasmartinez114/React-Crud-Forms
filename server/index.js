const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // used to access backend API in our React Front-end

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Welcome@123!!!',
  database: 'forms',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
  const sqlGet = 'SELECT * FROM gnie_update_request;';
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.get('/', (req, res) => {
  //   const sqlInsert =
  //     "INSERT INTO gnie_update_request (date, article_number, jurisdiction, description) VALUES ('2023-07-03', '123', 'Rhode Island', 'No Description')";
  //   db.query(sqlInsert, (err, result) => {
  //     console.log('error', err);
  //     console.log('result', result);
  //     res.send('Hello Express');
  //   });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

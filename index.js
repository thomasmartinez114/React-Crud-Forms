const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors'); // used to access backend API in our React Front-end

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

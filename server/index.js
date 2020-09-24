const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const dir = path.join('kg-product-detail-page', '/../client/dist');

const app = express();
const PORT = 9000;
// const getApiData = require('./api-helper.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static((dir)));

// Requests here

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Hello, Scrumdog.  Your server is running on PORT: ${PORT}`);
});

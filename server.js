const express = require('express');
const path = require('path');
const {port} = require('./config');

const app = express();

app.use(express.static(path.join(__dirname,'./dist')));

app.listen(port);

console.log(` http://localhost:${port}`);
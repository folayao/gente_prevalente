const express = require('express');
const path = require('path');
const {port} = require('./config');

const app = express();

app.use(express.static(path.join(__dirname,'./dist')));

// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname,'./dist'))
// })

// app.use(express.static(path.join(__dirname, './dist')))
// 	.set('views', path.join(__dirname, './dist'))
// 	.set('view engine', 'ejs')
// 	.get('*', (req, res) => res.render('./dist/index.html'))
// 	.listen(port, () => console.log(`Listening on ${ port }`));
app.listen(port);

console.log(` http://localhost:${port}`);
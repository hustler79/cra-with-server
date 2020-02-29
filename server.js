
const express = require('express');

const favicon = require('express-favicon');

const cors = require('cors')

const path = require('path');

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(favicon(__dirname + '/build/favicon.ico'));

// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', require('./api')());

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {


    console.log(`\n 🌎  Server is running ${port} ` + "\n")
});
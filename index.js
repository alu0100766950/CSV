var _ = require('node_modules/underscore');
var $ = require('jquery');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var WORKERS = process.env.WEB_CONCURRENCY || 1;

app.set('port', (process.env.PORT || 5000));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.static(__dirname + '/'));

app.get('/', function (request, response) {
    response.render('index', { title: 'Comma Separated Value Analyzer' });
});

app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
});

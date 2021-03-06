/**
 * Module dependencies.
 */

var express = require('express');
// var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');
var util = require('myutil');
global.exSetup = {
    from: 'USD',
    to: 'INR'
};
var ex = require('ex');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
// app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
// if ('development' == app.get('env')) {
    app.use(express.errorHandler());
// }

// app.get('/', routes.index);

app.get('/', function(req, res) {
    // console.log("typeof util:" + typeof util);
    // console.log("base: " + util.exSetup);
    // console.log("rates: " + util.exSetup);
    res.render('index.ejs', {
        title: 'currency conversion',
        base: util.exSetup.base,    
        rates: util.exSetup.rates
    });

    // console.log("typeof ex: " + typeof ex);
});

app.get('/convert', function(req, res) {
    var val = req.param('val');
    var from= req.param('from');
    var to = req.param('to');
    console.log( val + '' + from + '' + to );
    res.contentType('json');
    var result = ex.convert(val, {from: from, to: to}) || 'There was an error in conversion. Please try again later';
    res.send({
        result: result
    });
    // console.log("typeof ex: " + typeof ex);
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var config = require('./server/config/config');


var router = express.Router();

var db = require('./server/config/db');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(router);
router.use(logger('dev'));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.use(express.static(path.join(__dirname, 'client/')));

router.use(cookieParser());
router.use(express.static(path.join(__dirname, 'public')));

/**load route file*/
require('./server/routes')(router);

// catch 404 and forward to error handler

// error handlers

// development error handler


router.get('*', function(req, res) {
    res.sendFile(path.resolve('client/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

var port = config.server.port;

app.listen(process.env.PORT || port);

console.log('App started on port ' + port);

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var sockethelper = require('./socket/sockethelper')
var indexRouter = require('./routes/index');

var app = express();

app.use(session({
    secret: 'oui kapar sheli',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

var server = require('http').createServer(app);
var io = require('socket.io')(server);
sockethelper.startSockets(io);
server.listen(8888);

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;

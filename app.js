let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');
let helmet = require('helmet');
let session = require('express-session');
let MySQLSessionStore = require('express-mysql-session')(session);

// MySQL Session Store init
let sessionStore = new MySQLSessionStore({
    host: 'localhost',
    port: 3306,
    user: 'session_test',
    password: 'session_test',
    database: 'session_test'
});

// Routes init
let indexRouter = require('./routes/index');
let dashRouter = require('./routes/dash');
let apiRouter = require('./routes/api');

//Create express object
let app = express();

// add CORS support
app.use(cors());

// add helmet security
app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Session module init
app.use(session({
    key: 'TT2',
    secret: 'I9A9zg+6vDwT2+cPT1U/PDl0GtUDnOD74G6lUMJf9zoBd1ZnA20F9Ul2kl1fZUqwFu2M+6+fkdqT6/ac4FIVKQ==',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, //change to true with HTTPS
        httpOnly: true,
        sameSite: true,
        maxAge: 1000 * 60 * 60 * 2// Time is in milliseconds this is 2h
    }
}));

//assigning routes to http paths
app.use('/', indexRouter);
app.use('/dashboard', dashRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

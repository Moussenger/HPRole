/**
 * Module dependencies.
 */

var express         = require('express'),
    path            = require("path"),
    config          = require("./config/config.json"),
    homeController  = require("./backend/controllers/home.js");

/**
 * Create Express server.
 */

var app = express();


/**
 * Express configuration.
 */

var hour = 3600000;
var day = (hour * 24);
var month = (day * 30);


app.set('port', process.env.PORT || config.dev.dev_port);
app.set('views', path.join(__dirname, config.frontend.dirs.views));
app.set('view engine', config.frontend.viewengine);
app.use(express.compress());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(path.join(__dirname, config.frontend.dirs.public), { maxAge: day }));
app.use(app.router);
app.use(express.errorHandler());

/**
 * Application routes.
 */

app.get('/', homeController.index);


/**
 * Start Express server.
 */

app.listen(app.get('port'), function() {
    console.log("✔ Express server listening on port %d", app.get('port'));
});

module.exports = app;
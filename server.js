/**
 * Module dependencies.
 */

var express             = require('express'),
    path                = require("path"),
    config              = require("./config/config.js"),
    mongoose            = require("mongoose"),
    models              = require("./backend/models/models"),
    homeController      = require("./backend/controllers/home"),
    partialsController  = require("./backend/controllers/partials"),
    apiController       = require("./backend/controllers/api/api");


/**
* Init database
*/

mongoose.connect(config.dbURI, config.conf.mongoose);

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


app.set('port', process.env.PORT || config.conf.dev.dev_port);
app.set('views', path.join(__dirname, config.conf.frontend.dirs.views));
app.set('view engine', config.conf.frontend.viewengine);
app.use(express.compress());
app.use(express.favicon("frontend/public/img/favicon.ico"));
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static(path.join(__dirname, config.conf.frontend.dirs.public), { maxAge: day }));
app.use(app.router);
app.use(express.errorHandler());

/**
 * Application routes.
 */

app.get('/', homeController.index);
app.get('/partials/:view', partialsController.dispatch);
app.get('/api/spells/:name', apiController.spells.findSpellByName);


/**
 * Start Express server.
 */

app.listen(app.get('port'), function() {
    console.log("✔ Express server listening on port %d", app.get('port'));
});

module.exports = app;
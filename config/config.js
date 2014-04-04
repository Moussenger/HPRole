var config   = require("./config.json"),
    mongoose = require('mongoose');


//Database configuration

var dbProtocol = process.env.hpr_db_protocol || config.dev.db.protocol,
    dbHost     = process.env.hpr_db_host     || config.dev.db.host,
    dbPort     = process.env.hpr_db_port     || config.dev.db.port,
    dbDatabase = process.env.hpr_db_database || config.dev.db.database,
    dbUser     = process.env.hpr_db_user     || config.dev.db.user,
    dbPassword = process.env.hpr_db_password || config.dev.db.password,
    dbURI, db;

dbURI = dbProtocol+"://"+dbUser+":"+dbPassword+"@"+dbHost+":"+dbPort+"/"+dbDatabase
db = mongoose.connection;
db.once('open', function() {
    require("../backend/models/models.js")
});

//Config exports

exports.conf = config;
exports.dbURI  = dbURI;
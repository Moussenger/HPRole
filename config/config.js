var config = require("./config.json");


//Database configuration

var dbProtocol = process.env.hpr_db_protocol || config.dev.db.protocol,
    dbHost     = process.env.hpr_db_host     || config.dev.db.host,
    dbPort     = process.env.hpr_db_port     || config.dev.db.port,
    dbDatabase = process.env.hpr_db_database || config.dev.db.database,
    dbUser     = process.env.hpr_db_user     || config.dev.db.User,
    dbPassword = process.env.hpr_db_password || config.dev.db.password,
    dbURI;

dbURI = dbProtocol+"://"+dbUser+":"+dbPassword+"@"+dbHost+":"+dbPort+"/"+dbDatabase


//Config exports

exports.config = config;
exports.dbURI  = dbURI;
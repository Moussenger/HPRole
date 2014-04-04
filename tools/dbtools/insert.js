require("../../backend/models/spell.js");

var fs       = require("fs"),
    config   = require("../../config/config.js"),
    mongoose = require("mongoose"),
    Spell    = mongoose.model("Spell");

exports.execute = function (argv) {
    try {
        var i          = 0; 
            file       = argv[i++],
            collection = argv[i++];

        if(!file || !collection) throw "missed arguments";
    } catch (err) {
        console.log("USAGE: insert file collection");
        return;
    }

    mongoose.connect(config.dbURI, config.conf.mongoose);

    fs.readFile(file, "utf8", function (err, text) {
        var data = JSON.parse(text),
            spell;

        if(err) {
            console.log("ERROR: Cant read '" + file + "' file");
            return;
        }

        for(var i = 0, length = data.length; i< length; i++) {
            spell = new Spell({
                "name"       : data[i].name,
                "class"      : data[i].class,
                "level"      : data[i].level,
                "nowand"    : data[i]["no-wand"],
                "description": data[i].description
            });

            spell.create();
        }
        
    });

    mongoose.connection.close();

}
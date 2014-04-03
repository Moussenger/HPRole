var fs = require("fs");

exports.execute = function (argv) {
    try {
        var i          = 0; 
            file       = argv[i++],
            collection = argv[i++],
            pos        = argv[i++];

        if(!file || !collection) throw "missed arguments";
    } catch (err) {
        console.log("USAGE: insert file collection");
        return;
    }

    fs.readFile(file, "utf8", function (err, text) {
        var data;

        if(err) {
            console.log("ERROR: Cant read '" + file + "' file");
            return;
        }

        data = JSON.parse(text);
        console.log(data[pos].name);
        console.log(data[pos].class);
        console.log(data[pos].description);
    });

}
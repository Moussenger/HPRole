var insert = require("./dbtools/insert.js");


(function () {
    var arguments = process.argv.slice(2),
        script    = arguments[0];

    switch (script) {
        case "insert": insert.execute(arguments.slice(1)); break;
        default: console.log("USAGE: node tools.js script [arguments]");
    }
})();
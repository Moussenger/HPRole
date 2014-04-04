var mongoose = require("mongoose"),
    Spell    = mongoose.model("Spell"),
    api      = {};


api.findSpellByName = function (req, res) {
    var name = req.param("name");

    Spell.findByName(name, function (err, spell) {
        if(!err) {
            res.set({
                'Content-Type': 'application/json; charset=utf-8'
            });
            
            res.send(spell);
        } else {
            res.send(404);
        }
    });
}

module.exports = api;
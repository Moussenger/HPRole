var mongoose = require("mongoose"),
    config   = require("../../config/config.js"),
    Schema   = mongoose.Schema,
    SpellSchema;

// Spell Schema

SpellSchema = new Schema({
    "name"       : {type: String, required: true, unique: true},
    "class"      : {type: String, required: true},
    "level"      : {type: Number, required: true},
    "no_wand"    : {type: Boolean, required: true, default: false},
    "description": {type: String, required: true}  
});


// Spell methods

SpellSchema.methods = {
    create: function (callback) {
        this.save(callback);
    }
}


// Spell statics

SpellSchema.statics = {
    findByName: function (name, callback) {
        this.findOne({name: name}, callback);
    }
}

mongoose.model("Spell", SpellSchema);
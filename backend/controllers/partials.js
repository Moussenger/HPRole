/**
 * Dispatch partials views
 */

exports.dispatch = function(req, res) {
    var view = req.param("view");
    console.log("view:"+view);
    res.render('partials/'+view);   
};
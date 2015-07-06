"use strict";

module.exports = function(app){
    var routes = {
        main: require('./main'),
    };

    app.get('/', routes.main.index);

    app.get('/checkHealth', function(req, res) {
        return res.send('Healthy node');
    });
};

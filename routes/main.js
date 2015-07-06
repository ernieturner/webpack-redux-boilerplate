"use strict";

exports.index = function(req, res) {
    res.type('text/html');

    var assetRoot = "/";
    if(!process.env.NODE_ENV){
        assetRoot = 'http://localhost:7000/';
    }

    res.render('main', {
        pageTitle: 'WebPack+React+Redux Test',
        assetRoot: assetRoot
    });
};

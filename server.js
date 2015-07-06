"use strict";

var http = require('http'),
    path = require('path'),
    express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    compression = require('compression');

app.disable('x-powered-by');

//Enable gzip compression
app.use(compression());
app.set('json spaces', 0);

var hbs = exphbs.create({
    defaultLayout: 'template',
    layoutsDir: path.join(__dirname, '/views/layouts/'),
    partialsDir: path.join(__dirname, '/views')
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

/*eslint-disable*/
express.static.mime.default_type = "application/javascript";
/*eslint-enable*/
app.use('/public', express.static(path.join(__dirname, '/app/public'), {
    setHeaders: function(res){
        //Since we serve files out of this path in development, we need to only send long expire
        //headers if we're serving the optimized files. So check for a digit in the file (i.e. timetamp)
        //before sending expires headers
        if(/[.]\d+[.][a-z]+$/.test(res.req.url)){
            res.setHeader("Cache-Control", "public, max-age=31536000");
            res.setHeader("Expires", new Date(Date.now() + 15552000000).toUTCString());
        }
    }
}));

require('./routes')(app);
console.log("Server listening on port: " + (process.env.PORT || "5050"));
http.createServer(app).listen(process.env.PORT || 5050);

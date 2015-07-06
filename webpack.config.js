var path = require('path');
var webpack = require("webpack");

function getMainCodeSources(entryFile){
    var sources = [entryFile];

    if(process.env.NODE_ENV !== 'production'){
        sources.unshift('webpack-dev-server/client?http://localhost:7000', 'webpack/hot/only-dev-server');
    }
    return sources;
}

module.exports = {
    entry: {
        //Application specific code.
        app: getMainCodeSources('./app/main.js'),
        //All 3rd party source
        vendor: ['react', 'redux', 'lodash']
    },
    output: {
        path: path.join(__dirname, 'app', 'public', 'dist'),
        publicPath: 'http://localhost:7000/public/dist/',
        filename: 'app.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
            {
                test: /\.(png|jpg|jpeg|ttf)$/,
                loader: 'url?limit=3000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"common.js")
    ]
};

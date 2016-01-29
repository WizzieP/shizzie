var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        './src/main.jsx'
    ],
    resolve: {
        root: [
            path.resolve(__dirname, './src')
        ],
        extensions: ['', '.js', '.jsx', '.json']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }

};
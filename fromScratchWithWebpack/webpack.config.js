var webpack = require( 'webpack' );
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
       'app' : './src/main.ts',
        'polyfills': [
            'core-js/es6',
            // 'core-js/es7/reflect',
            // 'zone.js/dist/zone'
        ]
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, "dist"),
        filename: '[name].[hash].js'
    }, 
    module: {
        loaders: [
            {
                test: /\.ts$/, loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ]
            },
            // {test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.css$/, loader: 'raw-loader'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', 'css']
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
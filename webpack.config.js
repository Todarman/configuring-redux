var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.js'
  },
  module: {
        loaders: [
            //for es6 and react support
            { 
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015','react']
              }
            },
            
            //loader for sass support
            {
              test: /\.scss$/,
              loaders: ExtractTextPlugin.extract({fallback:"style-loader",use:['css-loader','sass-loader']})
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        //webpack plugin that creates a new css file in specified directory
        new ExtractTextPlugin("../css/td-style.css")
    ]
};

module.exports = config;
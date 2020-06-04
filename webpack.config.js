const webpack = require('webpack');
const path    = require('path');

module.exports = {
  context   : __dirname + '/src',
  entry     : './index.js',
  module    : {
    rules : [{
      test    : /\.js$/,
      exclude : /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      ],
    }],
  },
  externals : {
    'react'        : 'React',
    'react-dom' : 'react-dom',
    'react/addons' : 'React'
  },
  output    : {
    libraryTarget : 'commonjs-module',
    library       : 'Winterfell',
    filename      : 'winterfell.min.js',
    path          : __dirname + '/dist'
  }
  // plugins  : [
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress : {
  //       warnings : false
  //     }
  //   })
  // ]
};
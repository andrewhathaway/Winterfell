const webpack = require('webpack');
const path    = require('path');

module.exports = {
  mode: 'production',
  context   : __dirname + '/src',
  entry     : './index.js',
  optimization: {
    minimize: false
  },
  module    : {
    rules : [
      {
        test    : /\.(js|jsx)$/,        
        exclude : /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }],
  },
  resolve: {      
    alias: {          
        'react': path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
    }  
  },  
  externals : {
    react: {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
    },      
    "react-dom": {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
    },
    lodash : {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_' // indicates global variable
    }  
  },
  output    : {
    libraryTarget : 'umd',
    library       : 'winterfell',
    filename      : 'index.js',
    path          : path.join(__dirname, 'dist')  }
};
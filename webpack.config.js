const path = require('path');

module.exports = {
  entry: './examples/src/Examples.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'examples.js',
    path: path.resolve(__dirname, 'examples/dist')
  }
};

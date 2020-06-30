const path = require('path');

const config = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve('js'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /.jsx$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_module/,
      },
    ],
  },
};

module.exports = config;

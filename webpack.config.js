const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const FILENAME = 'bundle';

const config = {
  context: __dirname,
  entry: path.join(__dirname, 'src/js/index.js'),
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'build/'),
    filename: `${FILENAME}.js`
  },
  // devServer: {
  //     contentBase: 'src/',
  //     publicPath: '/src/',
  // },
  resolve: {
    extensions: ['.js', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  }
};

if (isProduction === true) {
  config.devtool = false;
  config.output.filename = `${FILENAME}.min.js`;
}

module.exports = config;

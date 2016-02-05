var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');

module.exports = {
  entry: './app',
  devtool: 'cheap-module-source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js']
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fixt Orioles Hackathon',
      template: './app/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '\'' + process.env.NODE_ENV + '\''
    })
  ],
  module: {
    loaders: [
      { test: /\.css?$/, loader: 'style-loader!css-loader'},
      { test: /\.otf?$/, loader: 'url-loader?limit=50000'},
      { test: /\.js?$/,
        loaders: ['react-hot-loader', 'babel'],
        exclude: /(node_modules|lib)/ },
    ]
  },
  resolve: { fallback: path.join(__dirname, 'node_modules') },
  resolveLoader: { fallback: path.join(__dirname, 'node_modules') }
};

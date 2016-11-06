import path from 'path';
import webpack from 'webpack';

module.exports = {
  entry: {
    'entry': './app/static/entry.jsx',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    root: [path.resolve('./app/static'),],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
      }
    }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: '#inline-source-map',
  devServer: {
    contentBase: './app',
    host: '0.0.0.0',
    port: 3000,
    publicPath: '/static/',
  }
};

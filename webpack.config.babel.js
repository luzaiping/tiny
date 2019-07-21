import webpack from 'webpack';
import path from 'path';

const { NODE_ENV } = process.env;

const filename = `tiny${NODE_ENV === 'production' ? '.min' : ''}.js`;

export default {
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },

  entry: [
    './src/index',
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename,
    library: 'tiny', // 这个指定最终要 export umd 的名称, 比如 window.tiny
    libraryTarget: 'umd',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    })
  ].filter(Boolean),
  optimization: {
    minimize: NODE_ENV === 'production'
  }
};

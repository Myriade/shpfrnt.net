// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'public'),
  },
  
  devServer: {
    open: true,
    host: 'localhost',
  },
  
  devtool: 'inline-source-map',
  
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/media', to: 'media' }
      ]
    })
  ],
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },{
        test: /\.css$/i,
        use: [stylesHandler,'css-loader'],
      },{
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, 'css-loader', 'sass-loader'],
      },{
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';        
  } else {
    config.mode = 'development';
  }
  return config;
};

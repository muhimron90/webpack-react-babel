const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    hot: true,
  },
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[path][name].[ext]', //'img/[name].[ext]'
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // resovled @import css not for sass/scss
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },

              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer({})],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: ' Webpack With React',
      body: ' success configure webpack babel react',
      template: path.join(__dirname, 'public', 'index.html'),
      // template: './src/index.html',
    }),
    
    new CleanWebpackPlugin(),
    
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
    chunkFilename: '[id].js',
  },
  devtool: 'source-map',
};
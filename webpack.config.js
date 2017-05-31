const path = require('path')
const webpack = require('webpack')
const eslint = require('eslint')

const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: {
    app: path.resolve('./app.js'),
    vendor: ['vue']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.[name].js'
  },
  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,
  module: {
    rules: [
      {
      	test: /\.vue$/,
      	enforce: 'pre',
      	use: [{
      		loader: 'eslint-loader',
      		options: {
      			formatter: require('eslint-friendly-formatter')
      		}
      	}]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/ 
      },
      {
      	test: /\.js$/,
      	loader: 'babel-loader!eslint-loader',
      	exclude: /node_modules/
      },
      {
      	test: /\.css$/,
      	use: ['style-loader', 'css-loader']
      },
      {
      	test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
      	loader: 'file-loader',
      	exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ]
}
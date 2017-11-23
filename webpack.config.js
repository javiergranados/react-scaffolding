const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.jsx$/, loaders: 'babel-loader', exclude: '/node_modules/' }
    ]
  },
  devServer: {
    port: 8088
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

module.exports = config

const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const postCSSPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contentHash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: "./src/templete.html"
  })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'postcss-loader', options: { plugins: postCSSPlugins }}
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
            esModule: false,
          }
        }
      },
    ],
  },
  // mode: "development",
  watch: true
};
const path = require('path');

const postCSSPlugins = [
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer')
]

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'postcss-loader', options: { plugins: postCSSPlugins } }
        ],
      },
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader',
      //   ],
      // },
    ],
  },
  mode: "development",
  watch: true
};
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "..", "account"),
          path.resolve(__dirname, "node_modules/@apps"),
          path.resolve(__dirname, "src")
        ],
        loader: 'babel-loader'
      }
    ]
  }
}

var path = require('path');

// https://github.com/webpack/webpack-dev-server/issues/1406

module.exports = (env, argv) => ({
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'app.bundle.js'
  },
  devtool: 'source-map',
  entry: ['./src/index.ts'],
  module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules|old/,
          loader: 'ts-loader',
        }
      ]
  },
});

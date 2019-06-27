const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

module.exports = {
  // 'src' as default source folder.
  context: path.resolve('./src'),

  // Defines application entries.
  entry: {
    index: ['./index.tsx']
  },

  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'source-map',

  devServer: {
    contentBase: path.resolve('./public'),
    disableHostCheck: true,
    port: 3000
  },

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [new CheckerPlugin()]
};

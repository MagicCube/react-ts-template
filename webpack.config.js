const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

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

  output: {
    filename: '[name].js',
    devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
  },

  // Source maps support ('inline-source-map' also works)
  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: path.resolve('./public'),
    disableHostCheck: true,
    quiet: true,
    port: 3000
  },

  // Add the loader for .ts files.
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-formatter-pretty')
        }
      }
    ]
  },
  plugins: [new CheckerPlugin(), new ErrorOverlayPlugin(), new FriendlyErrorsWebpackPlugin()]
};

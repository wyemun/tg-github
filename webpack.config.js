const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')

// env
const buildDirectory = './dist/'

const IS_DEV = process.env.NODE_ENV === 'development'

/**
 * Environment dependent plugin injection
 */
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': IS_DEV ? JSON.stringify('development') : JSON.stringify('production'),
    },
  }),
]

if (IS_DEV) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new DashboardPlugin()
  )
} else {
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  )
}

module.exports = {
  devtool: IS_DEV ? 'inline-source-map' : 'eval',
  entry: './src/app.jsx',
  devServer: {
    hot: true,
    inline: true,
    port: 7777,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(buildDirectory),
    filename: 'app.js',
    publicPath: 'http://localhost:7777/dist',
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['latest'],
        plugins: ['transform-class-properties', 'transform-export-extensions'],
      },
    }],
  },
  plugins: plugins,
}

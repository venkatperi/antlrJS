const webpack = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'assets/bundle.js'
  },
  node: {
    module: "empty",
    net: "empty",
    fs: "empty"
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  },
  plugins: [
    new webpack.ProvidePlugin( {
      $: 'jquery',
      jQuery: 'jquery'
    } ),
    new ExtractTextPlugin( "assets/styles.css" ),
    new CopyWebpackPlugin( [
      { from: './index.html' }
    ] )
  ],
  module: {
    rules: [ {
        test: /\.css$/,
        use: ExtractTextPlugin.extract( {
          fallback: "style-loader",
          use: "css-loader"
        } )
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        //include: 'images',
        use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
      },
    ]
  }
}

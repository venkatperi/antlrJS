const webpack = require( 'webpack' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );

module.exports = {
  entry: './app.js',
  output: {
    filename: 'dist/bundle.js'
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
    new ExtractTextPlugin( "dist/styles.css" ),
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

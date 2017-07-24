const webpack = require( 'webpack' );

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
    } )
  ]
}

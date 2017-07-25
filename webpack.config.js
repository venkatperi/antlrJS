const webpack = require( 'webpack' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const WebpackShellPlugin = require( 'webpack-shell-plugin' );
const path = require( 'path' );
const merge = require( 'webpack-merge' );
const StringReplacePlugin = require( "string-replace-webpack-plugin" );

const parts = require( './webpack.parts' );

module.exports = function( env ) {
  return {
    entry: {
      vendor: [ 'jquery', 'antlr4', 'lodash', 'brace', 'inspire-tree',
        'inspire-tree-dom'
      ],
      app: './app.js',
      index: './index.html'
    },
    output: {
      path: path.resolve( __dirname, `docs/${env.grammarName}` ),
      filename: 'assets/[name].bundle.js',
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
      new webpack.optimize.CommonsChunkPlugin( {
        name: "vendor",
        minChunks: Infinity,
      } ),
      //new WebpackShellPlugin( { onBuildStart: "" } ),
      new webpack.DefinePlugin( {
        GRAMMAR_NAME: JSON.stringify( env.grammarName ),
        START_RULE: JSON.stringify( env.startRule )
      } ),
      new StringReplacePlugin()
    ],

    module: {
      rules: [ {
          test: /\.html$/,
          use: "file-loader?name=[path][name].[ext]"
        },
        {
          test: /index.html$/,
          use: StringReplacePlugin.replace( {
            replacements: [ {
              pattern: /GRAMMAR_NAME/g,
              replacement: function( match, p1, offset, string ) {
                return env.grammarName;
              }
            } ]
          } )
        },
        {
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
}


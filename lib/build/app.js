const { promisify } = require( 'util' );
const _ = require( 'lodash' );
const path = require( 'path' );
const webpack = promisify( require( 'webpack' ) );
const uniqueString = require( 'unique-string' );

const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const StringReplacePlugin = require( "string-replace-webpack-plugin" );
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' )

module.exports = function( args = {} ) {
  process.chdir( path.join( __dirname, '../..' ) );
  return webpack( getConfig( args ) )
    .then( ( stats ) => {
      console.log( stats.toString( {
        chunks: false, // Makes the build much quieter
        colors: true // Shows colors in the console
      } ) );
    } );
}

function getConfig( opts = {} ) {
  return {
    entry: {
      vendor: [ 'jquery', 'antlr4', 'lodash', 'brace', 'inspire-tree',
        'inspire-tree-dom'
      ],
      app: './app.js',
      index: './index.html'
    },
    output: {
      path: opts.outDir,
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
      new webpack.DefinePlugin( {
        GRAMMAR_DIR: JSON.stringify( opts.buildDir ),
        GRAMMAR_NAME: JSON.stringify( opts.grammarName ),
        START_RULE: JSON.stringify( opts.startRule )
      } ),
      new StringReplacePlugin(),
      /*new UglifyJSPlugin( {
        exclude: /\app/,
        parallel: {
          cache: true,
          workers: 2 // for e.g
        }
      } )*/
    ],

    module: {
      rules: [ {
          test: /\.html$/,
          use: "file-loader?name=[path][name].[ext]"
        },
        { test: /\.hbr$/, use: "handlebars-loader" },
        {
          test: /index.html$/,
          use: StringReplacePlugin.replace( {
            replacements: [ {
              pattern: /GRAMMAR_NAME/g,
              replacement: function( match, p1, offset, string ) {
                return opts.baseHref
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

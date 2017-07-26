const { promisify } = require( 'util' );
const arrayp = require( 'arrayp' );
const rimraf = promisify( require( 'rimraf' ) );
const _ = require( 'lodash' );
const yargs = require( 'yargs' );
const path = require( 'path' );
const webpack = promisify( require( 'webpack' ) );
const uniqueString = require( 'unique-string' );

const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const StringReplacePlugin = require( "string-replace-webpack-plugin" );
const UglifyJSPlugin = require( 'uglifyjs-webpack-plugin' )

const antlrTool = require( './antlr_tool' );

const buildDir = path.join( __dirname, '../build', uniqueString() );

const args = yargs.options( {
    grammarDir: {
      alias: 'd',
      required: true,
      normalize: true
    },
    grammarName: {
      alias: 'n',
      required: true
    },
    startRule: {
      alias: 's',
      required: true
    },
    outDir: {
      alias: 'o',
      required: true
    },
    baseHref: {
      alias: 'h',
      default: ''
    },
  } )
  .coerce( 'outDir', ( x ) => path.resolve( process.cwd(), x ) )
  .help()
  .argv;

arrayp.chain( [
    buildGrammar( {
      cwd: args.grammarDir,
      files: `${args.grammarName}*.g4`,
      outdir: buildDir
    } ),
    buildApp,
    () => rimraf( buildDir ),
  ] )
  .catch( console.log );

function buildGrammar( opts = {} ) {
  opts = _.extend( { files: '*.g4', }, opts );
  let args = [];
  if ( opts.outdir ) {
    args.push( '-o' );
    args.push( opts.outdir );
  }

  args.push( opts.files );
  return antlrTool( args, { cwd: opts.cwd } );
}

function buildApp() {
  process.chdir( path.join( __dirname, '..' ) );
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

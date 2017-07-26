const { promisify } = require( 'util' );
const arrayp = require( 'arrayp' );
const rimraf = promisify( require( 'rimraf' ) );
const yargs = require( 'yargs' );
const path = require( 'path' );
const uniqueString = require( 'unique-string' );

const buildGrammar = require( './build/grammar' );
const buildApp = require( './build/app' );

const buildDir = path.join( __dirname, '../build', uniqueString() );

const args = yargs.options( {
    grammarDir: {
      alias: 'd',
      required: true,
      description: "directory containing antlr4 grammar files",
      normalize: true
    },
    grammarName: {
      alias: 'n',
      description: "antlr4 grammar name",
      required: true
    },
    startRule: {
      alias: 's',
      description: "antlr4 grammar start rule",
      required: true
    },
    outDir: {
      alias: 'o',
      description: "directory where output is generated",
      required: true
    },
    baseHref: {
      alias: 'h',
      description: "HTML base href for use with proxies",
      default: ''
    },
  } )
  .coerce( 'outDir', ( x ) => path.resolve( process.cwd(), x ) )
  .help()
  .argv;

args.buildDir = buildDir;

arrayp.chain( [
    buildGrammar( {
      cwd: args.grammarDir,
      files: `${args.grammarName}*.g4`,
      outdir: buildDir
    } ),
    () => buildApp( args ),
//    () => rimraf( buildDir ),
  ] )
  .catch( console.log );

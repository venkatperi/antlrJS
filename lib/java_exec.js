const ChildProcess = require( 'child_process' );
const { promisify } = require( 'util' );
const path = require( 'path' );
const _ = require( 'lodash' );

const exec = promisify( ChildProcess.exec );

class JavaExec {
  constructor( opts = {} ) {
    if ( !opts.main )
      throw new Error( 'no main class specified' );
    this.main = opts.main;
    this.jvmArgs = opts.jvmArgs || [];
    this.args = opts.args || [];
    this.executable = opts.executable;
    this.classpath = opts.classpath;
    this.cwd = opts.cwd || process.cwd();
  }

  get java() {
    if ( this.executable )
      return this.executable;
    if ( process.env.JAVA_HOME )
      return path.join( proces.env.JAVA_HOME, '/bin/java' );
    if ( process.env.JRE_HOME )
      return path.join( proces.env.JRE_HOME, '/bin/java' );

    return 'java';
  }

  execute() {
    //console.log( this.cwd );
    return exec( this.commandline, {
      cwd: this.cwd
    } );
  }

  get allArgs() {
    let args = [];
    args = args.concat( this.jvmArgs );
    if ( this.classpath ) {
      args.push( '-cp' );
      args.push( `"${this.classpath}"` );
    }
    args.push( this.main );
    args = args.concat( this.args );
    return args.join( ' ' );
  }

  get commandline() {
    return this.java + ' ' + this.allArgs;
  }
}

function javaExec( opts ) {
  return new JavaExec( opts ).execute();
}

javaExec.use = ( opts = {} ) => {
  return ( args, opts2 ) => {
    opts.args = ( opts.args || [] ).concat( args );
    _.extend( opts, opts2 );
    return new JavaExec( opts ).execute();
  }
}

javaExec.JavaExec = JavaExec;

module.exports = javaExec;

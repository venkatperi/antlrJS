const ChildProcess = require( 'child_process' );
const { promisify } = require( 'util' );
const path = require( 'path' );

const execFile = promisify( ChildProcess.execFile );

class JavaExec {
  constructor( opts = {} ) {
    if ( !opts.main )
      throw new Error( 'no main class specified' );
    this.main = opts.main;
    this.jvmArgs = opts.jvmArgs || [];
    this.args = opts.args || [];
    this.executable = opts.executable;
    this.classpath = opts.classpath;
    this.workingDir = opts.workingDir || process.cwd();
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
    return execFile( this.java, this.allArgs, {
      cwd: this.workingDir
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
    return args;
  }
}

function javaExec( opts ) {
  return new JavaExec( opts ).execute();
}

javaExec.JavaExec = JavaExec;

module.exports = javaExec;

const javaExec = require( './java_exec' );

module.exports = javaExec.use( {
    main: 'org.antlr.v4.Tool',
    jvmArgs: [ '-Xmx500M' ]
  } );

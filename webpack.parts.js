exports.setFreeVariable = ( key, value ) => {
  const env = {};
  env[ key ] = JSON.stringify( value );

  return {
    plugins: [
      new webpack.DefinePlugin( env ),
    ],
  };
};

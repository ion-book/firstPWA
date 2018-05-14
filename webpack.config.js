const path = require('path');
module.exports = {
    entry: {
        main: './src/main.ts'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'dist.bundle.js'
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
   
    // Source maps support ('inline-source-map' also works)
    devtool: 'source-map',
   
    // Add the loader for .ts files.
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
        }
      ]
    },
    plugins: [
    ]
  };
/* We are going to eventually have two webpack config files; one for the
 * server-side rendering, and one for the client-side
 */

const path = require('path');

module.exports = {
  // We are building a bundle for node.js instead of the browser
  target: 'node',

  // Tell webpack the root file of our application
  entry: './src/index.js',

  // Tells webpack where to put the output file that's generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/, // regex to test against every file name that gets included in our project
        loader: 'babel-loader',
        exclude: /node_modules/, // tells webpack to not run babel over specific items
        options: {
          presets: [
            'react',
            'stage-0', // used for handling some async code
            ['env', { targets: { browsers: ['last 2 versions'] }}],
          ],
        },
      },
    ],
  },
};
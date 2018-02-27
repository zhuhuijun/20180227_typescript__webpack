const path = require('path');
module.exports = {
  entry: ['babel-polyfill', './src/ts/main.ts'],
  resolve:
    {
      extensions: ['.ts', '.js', '.json']
    },
};
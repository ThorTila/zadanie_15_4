const path = require('path');

module.exports = {
  entry: {
      zadanie_4: './zadanie_4.js'
    },
  output: {
    filename: '[name]bundle.js',
    path: path.resolve(__dirname, './')
  }
};

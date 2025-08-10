const path = require('path');
const webpack = require('webpack');
require('dotenv').config();  

module.exports = {
  entry: './src/script.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),  // Inject the API_KEY into the code
    }),
  ],
  mode: 'production',  
};

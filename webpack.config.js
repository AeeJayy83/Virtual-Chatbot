const path = require('path');
const webpack = require('webpack');
require('dotenv').config();  // Load environment variables from .env

module.exports = {
  entry: './src/script.js',  // Adjust the entry point to your JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),  // Inject the API_KEY into the code
    }),
  ],
  mode: 'development',  // Or 'production' for production builds
};

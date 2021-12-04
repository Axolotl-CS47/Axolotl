const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.join(__dirname, "./client/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          //Compiles Sass to CSS
          "sass-loader",
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./client/index.html"),
    }),
  ],
  devServer: {
    static: {
      publicPath: '/public',
    },
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api/**': 'http://localhost:3000',
    },
  },
  resolve: {
    //Enable importing js or jsx without specifying type
    extensions: ['.js', '.jsx'],
  },

}
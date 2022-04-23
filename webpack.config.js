const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/js/app.js',
	mode: 'development',
	output: {
		path: __dirname+'/public',
		filename: 'bundle.js',
	},
  plugins: [new HtmlWebpackPlugin({
    title: 'izanf - software engineer',
    filename: 'index.html',
    inject: 'body',
    scriptLoading: 'defer',
    template: './src/index.html'
  })],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
	module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', 'babel-preset-airbnb']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ]
  }
};
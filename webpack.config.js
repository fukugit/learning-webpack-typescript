const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: './src/js/index.ts',
  mode: "development",
  devtool: "source-map",
  output: {
      path: `${__dirname}/docs`,
      filename: 'main.js'
  },
  devServer: {
      contentBase: './docs'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attributes: true
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]',
        },
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // ES2015以降のコードを変換
                '@babel/preset-env',
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    }),
    new MiniCssExtractPlugin({
      filename:'css/style.css'
    })
  ],
  // import命令で拡張子を省略した場合に自動判別するために拡張子を列挙します。
  resolve: {
    extensions: ['.ts', '.js', '.json']
  }
};

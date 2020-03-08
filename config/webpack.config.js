const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const meta = {
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  'theme-color': '#4285f4',
};

module.exports = {
  mode: 'development',
  entry: {
    index: './src/entries/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      // Generates app.html
      meta,
      filename: 'index.html',
      template: 'src/templates/index.html',
      title: 'Agile Poker',
      chunks: ['index'],
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, '../src/images/app.png'),
      prefix: '',
      favicons: {
        appName: 'Agile Planning Poker',
        appShortName: 'Planning Poker',
        appDescription: 'Planning poker for agile complexity vote',
        developerName: 'Putu Harum Bawa',
        developerURL: 'https://harumbawa.com/',
        background: '#defbfb',
        theme_color: '#defbfb',
        display: 'standalone',
        start_url: '/index.html',
        orientation: 'portrait',
      },
    }),
  ],
};

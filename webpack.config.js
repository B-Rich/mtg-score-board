var path = require('path');

module.exports = {
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "build/",
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.tag$/,
        loader: 'tag',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test   : /\.css$/,
        loaders: ['style', 'css', 'resolve-url']
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "resolve-url", "sass?sourceMap"]
      }
    ]
  }
};

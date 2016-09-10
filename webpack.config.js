var path = require('path');

var outputPath = path.resolve(__dirname, 'src/build');
var entryPath = path.resolve(__dirname, 'src/app/main.js');

var config = {
   entry: entryPath,
	
   output: {
      path:outputPath,
      filename: 'index.js',
      publicPath: 'src/build'
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
				
            query: {
               presets: ['es2015', 'react'],
               plugins: ['transform-object-rest-spread']
            }
         }
      ]
   }
}

module.exports = config;
var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template : __dirname + '/app/index.html',
	filename : 'index.html',
	inject : 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractTextPluginConfig = new ExtractTextPlugin({
	filename : 'stylesheets/main.css',
	allChunks : true
});

module.exports = {
	entry : __dirname + '/app/index.js',
	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : 'babel-loader'
			},
			{
				test : /\.scss$/,
				loader : ExtractTextPlugin.extract('css-loader!sass-loader')
			}
		]
	},
	output : {
		filename : 'transformed.js',
		path : __dirname + '/build'
	},
	plugins : [HTMLWebpackPluginConfig, ExtractTextPluginConfig]
};

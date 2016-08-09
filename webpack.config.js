module.exports = {
	entry: './js/index.js',
	output: {
		path: './',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			loader: 'babel',
			test: /\.js$/,
			exclude: /node_modules/
		}]
	},
	devServer:{
		contentBase: './'
	},
	devtool: "inline-source-map"
}
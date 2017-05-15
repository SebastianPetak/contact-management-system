module.exports = {
	// the main entry of our app
	entry: ['./src/index.js', './src/auth/auth.js'],
	// output configuration
	output: {
		path: __dirname + '/build/',
		publicPath: 'build/',
		filename: 'build.js'
	},

	module: {
		loaders: [
			// process *.vue files for using vue-loader
			{ test: /\.vue$/, loader: 'vue' },
			// process *.js files using babel-loader
			// the exclude patter insures we don't apply babel
			// transform to all dependencies
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
		]
	},

	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	}
};

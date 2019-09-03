
var cwd = process.cwd();



var config = {
  context: cwd,
  entry,
  output: {
    path: 'build',
    publicPath: 'build',
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: path.join(__dirname, 'src/components'),
      utils: path.join(__dirname, 'src/utils'),
      styles: path.join(__dirname, 'src/styles'),
      pages: path.join(__dirname, 'src/pages'),
      images: path.join(__dirname, 'src/images'),
      tips:path.join(__dirname, 'src/pages/index/containers/tips'),
    }
  },
  module: {
    loaders: [{
      test: /\.(jsx|js)?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.scss/,
      include: [
        path.resolve(__dirname, "src"),
        qnuiReg
      ],
      loader: ExtractTextPlugin.extract('style', 'raw!postcss!sass-loader')
    }, {
      // 小于8KB的图片使用base64内联
      test: /\.(png|jpg|gif|ico)$/,
      include: [
        path.resolve(__dirname, "src"),
        qnuiReg
      ],
      loader: 'url-loader?name=/images/[hash:8].[name].[ext]'
    }]
  },
  postcss: () => [precss, autoprefixer],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-redux': 'ReactRedux',
    'react-router': 'ReactRouter',
    'react-router-redux': 'ReactRouterRedux',
    'redux-thunk': 'var window.ReduxThunk.default',
    'redux': 'Redux',
    'qnui': 'qnui',
    'react/lib/ReactTransitionGroup': 'var window.React.addons.TransitionGroup',
    'react/lib/ReactCSSTransitionGroup': 'var window.React.addons.CSSTransitionGroup'
  },
  plugins: [
    new ExtractTextPlugin('[name].bundle.css', {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    // 允许错误不打断程序
    new webpack.NoErrorsPlugin(),

    // 进度插件
    new webpack.ProgressPlugin((percentage, msg) => {
      const stream = process.stderr;
      if (stream.isTTY && percentage < 0.71) {
        stream.cursorTo(0);
        stream.write(`📦   ${msg}`);
        stream.clearLine(1);
      }
    }),
    // 环境变量定义
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(DEV ? 'development' : 'production')
      },
      __DEV__: JSON.stringify(JSON.parse(DEV ? 'true' : 'false'))
    })
  ]
};





module.exports = config;
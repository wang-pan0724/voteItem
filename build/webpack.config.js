var path = require('path')
var webpack = require('webpack')
var config = require("./config")

var htmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
var isProduction = process.env.NODE_ENV === 'production';
// const CompressionWebpackPlugin = require('compression-webpack-plugin');
//输出目录
var outputPath = isProduction ? path.resolve(__dirname, config.build.path) : path.resolve(__dirname, config.dev.path);
var publicPath = isProduction ? config.build.publicpath : config.dev.publicpath;

var extractCSS = new ExtractTextPlugin({
  filename: "static/css/main-css.[hash:7].css",
  disable: config.build.extractCSS
})


var commenVue = ["vue", 'vue-router', 'axios', 'vuex']

var entry_pro = {
  commenVue: commenVue,
  main: './src/main.js'
}

var entry_dev = {
  commenVue: commenVue.concat([hotMiddlewareScript]),
  main: ['./src/main.js', hotMiddlewareScript]
}


module.exports = {
  entry: isProduction ? entry_pro : entry_dev,
  output: {
    path: outputPath,
    publicPath: publicPath,
    filename: 'static/js/[name].[hash:7].js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        postcss: [require('postcss-cssnext')()],
        //提取vue组件中的less
        extractCSS: isProduction
      }
    }, {
      test: /\.js$/,
      use: [{
        loader: "babel-loader"
      }],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      //提取css文件中的css
      use: extractCSS.extract({
        fallback: "style-loader",
        use: [
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/postcss.config.js'
              }
            }
          }
        ],

      }),
      exclude: '/node_modules/'
    }, {
      test: /\.less$/i,
      use: extractCSS.extract({
        fallback: "vue-style-loader",
        use: [
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: __dirname + '/postcss.config.js'
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              strictMath: true,
              noIeCompat: true
            }
          }
        ]
      }),
      exclude: '/node_modules/'
    }, {
      test: /\.(png|jpe?g|gif)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 8024,
        name: 'static/img/[name].[ext]?[hash:7]'
      },
      exclude: '/node_modules/'
    }, {
      test: /\.(svg)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 1,
        name: 'static/img/[name].[ext]?[hash:7]'
      },
      exclude: '/node_modules/'
    }, {
      test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
      loader: 'file-loader?name=static/css/fonts/[name].[ext]'
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'static/media/[name].[ext]?[hash:7]'
      }
    },]
  },
  plugins: [
    extractCSS,
    new htmlWebpackPlugin({
      template: "src/index.html",
      inject: 'body',
      filename: "index.html",
      minify: { //页面压缩
        removeComments: isProduction, //删除注释
        collapseWhitespace: isProduction, //去空格
        minifyCSS: isProduction, //压缩CSS
        minifyJS: isProduction, //压缩JS
        removeEmptyAttributes: isProduction //删除空白属性
      }

    }),

    //热更新
    new webpack.HotModuleReplacementPlugin(),
    //提取公共JS
    new webpack.optimize.CommonsChunkPlugin({ name: 'commenVue', filename: 'static/js/commenVue.[hash:7].js' }),

    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: outputPath + '/static/',
      ignore: ['.*']
    }]),


    new webpack.BannerPlugin("Copyright © 2014-2017 Learning Tech Co.,Ltd. 陕ICP备15001970-2号"), //在css js头部插入注释

    // new CompressionWebpackPlugin({
    //     asset: '[path].gz[query]',
    //     algorithm: 'gzip',
    //     test: new RegExp(
    //         '\\.(' +
    //         ['js', 'css'].join('|') +
    //         ')$'
    //     ),
    //     threshold: 10240,
    //     minRatio: 0.8
    // })


  ],
  resolve: {
    extensions: ['.js', '.json', '.vue', '.less', '.css'],
    alias: {
      'vue$': isProduction ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
    }
  },

  devtool: '#eval-source-map'
}

if (isProduction) {
  module.exports.devtool = false
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
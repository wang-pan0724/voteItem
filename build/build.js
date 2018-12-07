var rm = require('rimraf')
var config = require("./config")
var path = require("path")
var ora = require('ora')
var chalk = require('chalk')
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'production'

console.log('process.env.NODE_ENV:' + process.env.NODE_ENV)

var spinner = ora('building for production...')
spinner.start()

rm(path.join(path.resolve(__dirname, config.build.path)), err => {
    if (err) throw err
    webpack(webpackConfig, function(err, stats) {
        spinner.stop()
        if (err) throw err
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening index.html over file:// won\'t work.\n'
        ))
    })
})
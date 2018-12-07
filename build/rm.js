var rm = require('rimraf')
var config = require("./config")
var chalk = require('chalk')
var path = require('path')
var ora = require('ora')


var spinner = ora('正在删除' + path.resolve(__dirname, config.build.path))
spinner.start()

console.log(path.join(path.resolve(__dirname, config.build.path)))

rm(path.join(path.resolve(__dirname, config.build.path)), err => {
    if (err) throw err
    console.log()
    console.log()
    console.log(
        chalk.green("    #删除成功", path.resolve(__dirname, config.build.path, '../'))

    );
    console.log()

    spinner.stop()
})
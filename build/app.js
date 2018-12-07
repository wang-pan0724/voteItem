var express = require("express");
var path = require("path");

var httpProxy = require('http-proxy');
var fs = require("fs")
var open = require("opn");
var chalk = require('chalk')
var config = require("./config")
const compression = require('compression');
var port = config.port.start;
var ip = require("./ip")
fs.exists(config.build.dirname, function(exists) {

    if (exists) {
        startServer()
    }
    if (!exists) {
        console.log(
            chalk.green("当前目录下找不到编译的文件夹,请先执行编译npm run build")

        );
        console.log()
    }
})

function startServer() {
    var app = express();


    // 新建一个代理 Proxy Server 对象  
    var proxy = httpProxy.createProxyServer();
    
    app.use(compression());

    //设置静态资源
    app.use(express.static(path.resolve(__dirname, '../', config.build.dirname)));


    app.all("/api/*", function(req, res) {
        delete req.headers.host;
        proxy.web(req, res, { target: config.baseURL });
    })

    app.all("/shanhaimap/api/*", function(req, res) {
        delete req.headers.host;
        console.log(req.url);
        proxy.web(req, res, { target: config.imgBase });
    })

    // app.get("/upload/*", function(req, res) {
    //     delete req.headers.host;
    //     proxy.web(req, res, { target: config.baseURL });
    // })
    app.listen(port, function() {
        // open('http://localhost:' + port)
        console.log()
        console.log(
            chalk.green('http://localhost:' + port)
        )
        console.log()
    })
}
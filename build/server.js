var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
var express = require("express");
var path = require("path");
var open = require("opn");
var config = require("./config")
var ip = require("./ip")

var port = config.port.dev

var httpProxy = require('http-proxy');

var app = express();


// 新建一个代理 Proxy Server 对象  
var proxy = httpProxy.createProxyServer();

console.log()

//设置静态资源
app.use(express.static(path.resolve(__dirname, config.dev.dirname)));

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
}));

app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log,
    reload: true,
    path: "/__webpack_hmr",
    heartbeat: 2000
}));

app.all("/shanhaimap/api/*", function(req, res) {
    delete req.headers.host;
    console.log(req.url);
    proxy.web(req, res, { target: config.imgBase });
})
app.all("/api/*", function(req, res) {
    delete req.headers.host;
    console.log(req.url);
    proxy.web(req, res, { target: config.imgBase });
})

app.listen(port, function() {
    open('http://'+ip()+':' + port)
})
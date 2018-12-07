var express = require("express");
var path = require("path");

var httpProxy = require('http-proxy');
var config = require("./config")
var port = config.port.start;
const compression = require('compression');

function startServer() {
    var app = express();


    // 新建一个代理 Proxy Server 对象  
    var proxy = httpProxy.createProxyServer();

    app.use(compression());

    //设置静态资源
    app.use(express.static(path.resolve(__dirname, '../','dist')));


    // var https=require('https');
    // app.get("/shanhaimap/xexexexe", function(oreq, ores) {
    //     console.log('xxxxxxx');
    //     var code = oreq.query.code;
    //     console.log(code);
    //     var url = 
    //     `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx73ddc11cb6707753&secret=yajiadaneosoho1112shanhaimap2288&code=${code}&grant_type=authorization_code`
    //     console.log(url);
        
    //     https.get(url,function(req,res){
    //         var html='';
    //         req.on('data',function(data){
    //             html+=data;
    //         });
    //         req.on('end',function(){
    //             console.log('~~~~~~~~~~~~~~~~~~~~~~~')
    //             console.log(html)
    //             ores.send(html);
    //             ores.end();
    //         });
    
    //     })
    // })

    app.all("/api/*", function(req, res) {
        delete req.headers.host;
        // console.log(config.imgBase);
        proxy.web(req, res, { target: config.imgBase });
    })

    app.all("/shanhaimap/api/*", function(req, res) {
        delete req.headers.host;
        // console.log(config.imgBase);
        proxy.web(req, res, { target: config.imgBase });
    })

    app.get("/upload/*", function(req, res) {
        delete req.headers.host;
        proxy.web(req, res, { target: config.imgBase });
    })


    app.listen(port, function() {
        console.log('http://127.0.0.1:' + port)
    })
}

startServer()
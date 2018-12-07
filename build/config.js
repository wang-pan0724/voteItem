module.exports = {
    build: {
        path: '../dist',
        startpath: '/',
        publicpath: '/',
        //是否提取css less 到单独文件中
        extractCSS: process.env.NODE_ENV === 'development',
        //生成文件的名称  和path中的文件夹名称一致
        dirname: 'dist'
    },
    dev: {
        path: '../dist/',
        publicpath: '/',
        dirname: 'dist'
    },

    port:{
        dev:8188,
        start:3000
    },
    //代理服务器url
    // baseURL: 'http://39.104.176.240/shanhaimap',
    // baseURL: 'http://172.31.1.23:8081/',
    // baseURL: 'http://39.104.176.93/shanhaimap',
    // imgBase: 'http://39.104.176.93',
    // imgBase: 'http://www.shanhaimap.com:8080',
    imgBase: 'http://47.52.238.87:8080',
    apiurl: '/shanhaimap',
    // imgBase: 'http://model123.imwork.net:10944'
    
}
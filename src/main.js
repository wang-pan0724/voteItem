import vue from 'vue'
import vueRouter from 'vue-router'
import App from './App.vue'
import axios from './plugin/ajax/index'
import store from './store'
import fliters from "./plugin/filter/index"
import {isWeixinBrowser, getUrlKey} from './plugin/commonFun/index';

fliters()

vue.use(vueRouter)
vue.use(axios)

// 样式引入
import 'vscoding-ui/dist/style.css'
import './style/index.less'
import 'mint-ui/lib/style.css';

import Mint from 'mint-ui';
vue.use(Mint);

// //h5编辑器
// import VueHtml5Editor from 've-editors'
// import vuehtmlOption from "./plugin/h5/vuehtmlOption"
// vue.use(VueHtml5Editor, vuehtmlOption)


import routes from './router/index'
//实例化VueRouter
let router = new vueRouter({
    routes
})


import token from './plugin/token'
import http from './plugin/ajax/ajax'


// router.beforeEach((to, from, next) => {
//     /**
//      * 检测当前是否需要登录验证
//      * 1. 确定当前页面是否需要登录
//      */
//     if(isWeixinBrowser()) {
//         store.commit('setWxPay', true);
//         if (!token.getSeToken('isOauth')) {
//             // 微信授权
//             if (!getUrlKey('code') || !getUrlKey('state')) {
//                 // 去授权
//                 let URI = encodeURIComponent(location.href);
//                 var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appKey.appid + '&redirect_uri=' + URI + '&response_type=code&scope=snsapi_base&state=1a2a3a&connect_redirect=1#wechat_redirect'
//                 window.location = url
//             } else {
//                 token.setSeToken('isOauth', true);
    
//                 http.post('api/pay/wechat/authCodeToOpenId', { code: getUrlKey('code') }).then((res) => {
//                     let model = JSON.parse(res.model);
//                     token.setSeToken('openId', model.openid);
//                 })
//                 let hash = location.hash.substr(1);
//                 next({path: hash});
//                 return false
//             }
//         } else {
//             next();
//         }
//     } else {
//         store.commit('setWxPay', false);
//         next();
//     }
// })
new vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
import axios from 'axios';
import tokenFun from '../token'
import store from "../../store/index"
import config from '../../../build/config'

import vue from "vue"
import { Toast } from 'mint-ui';

vue.component(Toast)
let vm = new vue();

let Promise = require('es6-promise').Promise;

const Axios = axios.create({
    // baseURL: '/',
    baseURL: '/shanhaimap',
    timeout: 500000,
    withCredentials: true, //带上 cookie
})

//添加一个请求拦截器
Axios.interceptors.request.use(config => {

    //POST传参序列化
    if (config.method === 'post') {
        if (config.data) {
            // 数据序列化成表单
            const formData = new FormData()
            Object.keys(config.data).forEach(key => formData.append(key, config.data[key]))
            config.data = formData
        }
    }

    if (config.method === 'put' || config.method == 'delete') {
        let url = ''
        for (let key in config.data) {
            url += key + '=' + config.data[key] + '&'
        }
        url = url.slice(0, url.length - 1)
        config.data = url
    }
    if (config.method === 'get' && config.url.indexOf('/api/') != -1 && config.data) {
        let url = '?'
        for (let key in config.data) {
            url += key + '=' + config.data[key] + '&'
        }
        url = url.slice(0, url.length - 1)
        config.url += url
    }

    // 存储 token
    if (!tokenFun.getToken('SESSIONID')) {
        //存储token 后跳至  如果不需要 可以删除此步
    } else {
        config.headers.Authorization = "SESSIONID=" + tokenFun.getToken("SESSIONID")
    }

    return config
}, error => {
    vm.$toast("网络错误");
    return Promise.reject(error)
})

//添加一个返回拦截器
Axios.interceptors.response.use(res => {
    const { data } = res
    if (data.msg == 'success') {
        return data
    } else {
        if (data.msg == 'no_login') {
            //处理错误
            vm.$toast("请登陆后操作");
            store.commit("setUserInfo",{});
            tokenFun.removeToken('SESSIONID');
            tokenFun.removeToken('CHECKSESSIONID');
            tokenFun.removeToken('userid');
        } else if (data.msg == 'unverified') {
            vm.$toast("登录已过期，重新登录");
            tokenFun.removeToken('SESSIONID');
            tokenFun.removeToken('CHECKSESSIONID');
            tokenFun.removeToken('userid');
        } else {
            //处理错误
            // vm.$toast(data.msg)
        }
        return data
    }

}, error => {
    vm.$toast("网络错误，请检查网络再试！");
    return error
})

export default Axios
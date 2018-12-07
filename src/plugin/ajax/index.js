import http from './ajax'
import apiList from '../../api/index';

export default {
    install: function (Vue, name = '$http') {
        Object.defineProperty(Vue.prototype, name, { value: apiList});
    }
}

import http from "../plugin/ajax/ajax"
import token from "../plugin/token/index"
import vue from "vue"
import { Toast } from 'mint-ui';

vue.component(Toast)
let vm = new vue();
export default {
	getUserInfo(context, id) {
		http.get('/api/users/info/'+id)
			.then(data => {
				if (data.msg == 'success') {
					for (var k in data.model) {
						data.model[k] = data.model[k] ? data.model[k] : ""
					}
					context.dispatch('getqiyeinfo',data.model)
				}
			})
	},
	getqiyeinfo(context,obj) {
		http.post("/api/enterprise/form").then(data => {
			vm.$indicator.close();
		  if (data.msg == "success") {
				for (var k in data.model) {
					data.model[k] = data.model[k] ? data.model[k] : ""
				}
				debugger;
				obj.qiye = data.model
				context.commit('setUserInfo', obj)
				if ( obj.userType == 'PTYH') {
					if(obj.profileLacked) {
						vm.$toast("个人用户必须补全个人资料");
						window.location.href = '/#/info';
					} else {
						let hash = location.hash;
						if(hash.indexOf('login') > -1) {
							window.location.href = '/#/index/home';
						}
					}
				} else if ( obj.userType == 'GYS') {
					if(obj.enterpriseLacked) {
						vm.$toast("供应商用户请在PC站必须补全公司资料")
						window.localStorage.clear();
						context.commit("setUserInfo",{});
					}
					let hash = location.hash;
					if(hash.indexOf('login') > -1) {
						window.location.href = '/#/index/home';
					}
				}
				// console.log(obj)
		  }
		});
	}
}
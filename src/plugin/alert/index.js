import vue from 'vue'
function alert(obj) {
	vue.prototype.$notify({
		title: obj.title ? obj.title : '提示',
		message: obj.msg,
		type: obj.type ? obj.type : 'warning',
		duration: 1500
	});
}
export default {
	install: function (Vue, name = '_alert') {
		Object.defineProperty(Vue.prototype, name, { value: alert });
	}
}
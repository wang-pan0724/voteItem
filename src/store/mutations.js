export default {
	setUserInfo(state,data){
		state.userInfo = data
	},
	setpassword(state,data){
		state.password = data
	},
	setCode(state, data) {
		state.code = data;
	},
	setWxPay(state, data) {
		state.wxPayBool = data;
		console.log(state);
	}
}
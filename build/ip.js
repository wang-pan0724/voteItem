var os = require('os');

let ip = function () {
	var network = os.networkInterfaces();
	try {
		for (var i = 0; i < network.en0.length; i++) {
			var json = network.en0[i];
			if (json.family == 'IPv4') {
				return json.address
			}
		}
	} catch(err){
		return '127.0.0.1'
	}

}
module.exports = ip;
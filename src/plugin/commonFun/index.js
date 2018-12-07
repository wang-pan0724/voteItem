export function isWeixinBrowser() {
    var agent = navigator.userAgent.toLowerCase();
    if (agent.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}

export function getUrlKey(name) {
    var reg = `(^|&)${name}=([^&]*)(&|$)`
    reg = new RegExp(reg);
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2])
    } else {
        return false
    }
}
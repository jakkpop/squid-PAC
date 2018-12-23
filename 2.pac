var list = ["*.abcmouse.com", "*.sciencea-z.com", "*.starfall.com", "*.kidsa-z.com", "kidsa-z.com", "*.raz-plus.com", "raz-plus.com", "*.raz-kids.com", "raz-kids.com", "*.learninga-z.com", "learninga-z.com", "*.headsprout.com", "headsprout.com"];
var proxy = "PROXY 23.94.25.145:25";

function FindProxyForURL(url, host) {
    for (var i = 0, l = list.length; i < l; i++) {
        if (shExpMatch(host, list[i])) {
            return proxy;
        }
    }
    return "DIRECT";
}

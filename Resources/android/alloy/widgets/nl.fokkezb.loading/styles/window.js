function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0009,
    key: "loadingWindow",
    style: {
        backgroundColor: "transparent",
        backgroundImage: null,
        opacity: 1,
        navBarHidden: true,
        modal: false,
        theme: "Theme.AppCompat.Translucent.NoTitleBar"
    }
} ];
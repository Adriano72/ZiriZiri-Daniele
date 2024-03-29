function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0004,
    key: "Window",
    style: {
        orientationModes: [ Ti.UI.PORTRAIT ]
    }
}, {
    isClass: true,
    priority: 10000.0005,
    key: "loadingMask",
    style: {
        backgroundColor: "#5000",
        backgroundImage: null,
        opacity: 1,
        modal: false
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "loadingOuter",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderRadius: 10,
        backgroundColor: "#C000"
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "loadingInner",
    style: {
        top: "20dp",
        right: "20dp",
        bottom: "20dp",
        left: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "loadingIndicator",
    style: {
        top: "0dp",
        style: Ti.UI.ActivityIndicatorStyle.BIG
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "loadingImages",
    style: {
        top: "0dp",
        images: [ "/images/nl.fokkezb.loading/00.png", "/images/nl.fokkezb.loading/01.png", "/images/nl.fokkezb.loading/02.png", "/images/nl.fokkezb.loading/03.png", "/images/nl.fokkezb.loading/04.png", "/images/nl.fokkezb.loading/05.png", "/images/nl.fokkezb.loading/06.png", "/images/nl.fokkezb.loading/07.png", "/images/nl.fokkezb.loading/08.png", "/images/nl.fokkezb.loading/09.png", "/images/nl.fokkezb.loading/10.png", "/images/nl.fokkezb.loading/11.png" ]
    }
}, {
    isClass: true,
    priority: 10000.0011,
    key: "loadingMessage",
    style: {
        top: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: L("loadingMessage", "Loading.."),
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
}, {
    isClass: true,
    priority: 10101.0009,
    key: "loadingIndicator",
    style: {
        style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG
    }
} ];
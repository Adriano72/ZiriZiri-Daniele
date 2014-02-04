function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowLINK";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowLINK = Ti.UI.createTableViewRow({
        id: "rowLINK"
    });
    $.__views.rowLINK && $.addTopLevelView($.__views.rowLINK);
    $.__views.image = Ti.UI.createImageView({
        id: "image"
    });
    $.__views.rowLINK.add($.__views.image);
    $.__views.date = Ti.UI.createLabel({
        id: "date"
    });
    $.__views.rowLINK.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.rowLINK.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
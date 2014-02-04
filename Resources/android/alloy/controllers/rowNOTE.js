function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowNOTE";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowNOTE = Ti.UI.createTableViewRow({
        id: "rowNOTE"
    });
    $.__views.rowNOTE && $.addTopLevelView($.__views.rowNOTE);
    $.__views.image = Ti.UI.createImageView({
        id: "image"
    });
    $.__views.rowNOTE.add($.__views.image);
    $.__views.date = Ti.UI.createLabel({
        id: "date"
    });
    $.__views.rowNOTE.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.rowNOTE.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
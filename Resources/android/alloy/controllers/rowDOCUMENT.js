function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowDOCUMENT";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowDOCUMENT = Ti.UI.createTableViewRow({
        id: "rowDOCUMENT"
    });
    $.__views.rowDOCUMENT && $.addTopLevelView($.__views.rowDOCUMENT);
    $.__views.image = Ti.UI.createImageView({
        id: "image"
    });
    $.__views.rowDOCUMENT.add($.__views.image);
    $.__views.date = Ti.UI.createLabel({
        id: "date"
    });
    $.__views.rowDOCUMENT.add($.__views.date);
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.rowDOCUMENT.add($.__views.title);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dettaglio_post";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.dettaglio_post = Ti.UI.createWindow({
        title: "Dettaglio Post",
        id: "dettaglio_post"
    });
    $.__views.dettaglio_post && $.addTopLevelView($.__views.dettaglio_post);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.dettaglio_post.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    $.__views.titolo_post = Ti.UI.createLabel({
        id: "titolo_post"
    });
    $.__views.__alloyId0.add($.__views.titolo_post);
    $.__views.descrizione_post = Ti.UI.createLabel({
        id: "descrizione_post"
    });
    $.__views.__alloyId0.add($.__views.descrizione_post);
    $.__views.date_post_creation = Ti.UI.createLabel({
        id: "date_post_creation"
    });
    $.__views.__alloyId0.add($.__views.date_post_creation);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
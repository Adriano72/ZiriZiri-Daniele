exports.definition = {
    config: {},
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Post", exports.definition, []);

collection = Alloy.C("Post", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
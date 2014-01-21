exports.definition = {
    config: {
        columns: {
            name: "string",
            category: "string",
            aspects: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "timeline"
        }
    },
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

model = Alloy.M("timeline", exports.definition, []);

collection = Alloy.C("timeline", exports.definition, model);

exports.Model = model;

exports.Collection = collection;
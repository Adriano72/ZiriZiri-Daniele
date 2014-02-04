exports.definition = {
	config: {
		columns: {
			"id": "int",
		    "name": "string",
		    "date": "string",
		    "month":"string",
		    "day":"string",
		    "category": "string",
		    "aspects": "string"
		},
		adapter: {
			type: "sql",
			collection_name: "events"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};
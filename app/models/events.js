exports.definition = {
	config: {
		columns: {
			"id": "int",
		    "name": "string",
		    "date": "string",
		    "rating": "int",
		    "month":"string",
		    "day":"string",
		    "category": "string",
		    "location": "string",
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
var mongoose = require('mongoose');

var searchResultsSchema = mongoose.Schema({
	results: [{
		name: String,
		frenchname: String,
		localname: String,
		region: String
	}]
});

module.exports = mongoose.model('result', searchResultsSchema);
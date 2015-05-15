mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
	name: String,
	frenchName: String,
	localName: String,
	region: String,
	hasTraveled: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('country', countrySchema);
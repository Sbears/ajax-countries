var countries = require('../models/countries.js');
//var results = require('../models/results.js');
var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	countries: function(req, res) {

	countries.find({}, function(err, results){
		res.send(results);
	});
		
	},

	search: function(req, res) {
	// console.log(countries[3].name);
	// console.log(req.query.searchCriterea);
	var sCriterea = req.query.searchCriterea;
	var searchResults = [];
		countries.find({}, function(err, results){
			for (var i = 0; i < results.length; i++) {
			if(results[i].name === sCriterea || results[i].frenchName  === sCriterea || results[i].localName === sCriterea || results[i].region === sCriterea) {
				searchResults.push(results[i]);
			}
		}
		res.send(searchResults);
		});
		
	},

	traveled: function(req, res) {
		console.log(req.query.hasTraveled);
		var id = req.query.checkId;
		countries.findById(id, function(err, results){
			results.hasTraveled = req.query.hasTraveled;
			results.save();
			res.send(results);
		});
		
	}




};

module.exports = indexController;
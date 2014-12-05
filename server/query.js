var schema = require('./schemamodels.js')

var fetchArtist = function(req, res){
	shcema.Artist.find({}).exec(function(err, 'artists'){
		res.send(200, artists);
	})
};

module.exports.fetchArtist = fetchArtist;
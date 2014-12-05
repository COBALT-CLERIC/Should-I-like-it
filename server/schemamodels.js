var mongoose = require('mongoose');

//temp database hosted on mongoLabs
var uri = 'https://api.mongolab.com/api/1/databases?apiKey=0Yd5feoZTPVXT9a2HgbBBfA5KikBbLle
';

//connect to MongoLabs database
mongoose.connect(uri, function(error){
	if(error){
	console.log(error);
	}
});

//Mongoose Schema definition
var Schema = mongoose.Schema;

//schema for API results
var ResultSchema = new Schema({
	artist: String,
	rating: Number,
	timeStamp: Number
});

//schema for artist autocomplete
var ArtistSchema = new Schema({
	artist_name: String
});


//Result Mongoose Model definition
var Result = mongoose.model('results', ResultSchema);
var Artist = mongoose.model('artists', ArtistSchema);

module.exports = Artist;
module.exports = Result;




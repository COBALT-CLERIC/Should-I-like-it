var Result = require('./results.js');
var strip = require('./strip.js');
var saveResult = function (data, callback) {
  //creates new instance of result

<<<<<<< HEAD

exports.saveResult = function (pitchforkResults) {
  
  //creates new instance of result
  var newResult = new Result({
    artist: pitchforkResults.artist,
	  rating: pitchforkResults.rating,
	  timeStamp: pitchforkResults.timeStamp,
	  url: pitchforkResults.url
=======
  var artist = data.artistName.toLowerCase();
  var newResult = new Result({
    artistName: strip(artist),
	url: data.url,
    timestamp: data.timestamp,
    rating: data.rating
>>>>>>> origin/Iss67
  });
  console.log(newResult);

  //saves result to database
  newResult.save(callback);
};

<<<<<<< HEAD
  //saves result to database
  newResult.save(function(err, newEntry){
  	if(err){
  	  res.send(500);
  	}else{
  	  res.send(200, newEntry);
  	}
  })
};
=======
module.exports = saveResult;
>>>>>>> origin/Iss67

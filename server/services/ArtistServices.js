const Artist = require('../models/Artists');

const createArtist = (dataA) => {
	return Artist.create(dataA);
};
const getArtists = (args) => {
	return Artist.find(args).exec();
};
const getArtistByID =  (_id) => {
	return Artist.findOne({_id}).exec();
};
const updateArtistByID = (id, dataA) =>{
	return Artist.findOneAndUpdate({_id:id},{$set :{ ...dataA }});
};
const deleteArtistByID = (id) =>{
	return Artist.findOneAndUpdate({_id:id});
};


module.exports = {
	getArtists,
	getArtistByID,
	createArtist,
	updateArtistByID,
	deleteArtistByID
} ;
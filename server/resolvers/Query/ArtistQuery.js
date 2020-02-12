const { getArtists, getArtistByID } = require('../../services/ArtistServices');


const allArtist = (root,args,context,info) => {
	return getArtists(args);
};

const getOneArtist = (root,args,context,info)  => {
	if (args.id){
		return getArtistByID(args.id);
	}else {
		throw Error('You need to choose id');
	}

};


module.exports = {
	allArtist,
	getOneArtist
};
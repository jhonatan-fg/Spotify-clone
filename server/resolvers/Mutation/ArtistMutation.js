const { createArtist, deleteArtistByID } =  require('../../services/ArtistServices');
const storage = require('../../utils/storage');


const newArtist = async(root,{dataA},context,info) => {
	if(dataA.photo){
		const { createReadStream }  = await dataA.photo;
		const stream = createReadStream();
		const image = await storage({ stream });
		dataA = {...dataA,photo:image.url};
	}
	console.log(dataA);
	return createArtist(dataA);

};

const deleteArtist = async(_, args) => {
	await deleteArtistByID(args.id);
	return {
		code:204,
		message:'Artist removed successfully'
	};

};



module.exports = {
	newArtist,
	deleteArtist
};
const { createRelease, deleteReleaseByID } =  require('../../services/ReleaseService');
const storage = require('../../utils/storage');


const newRelease = async(root,{dataR},context,info) => {
	if(dataR.photo){
		const { createReadStream }  = await dataR.photo;
		const stream = createReadStream();
		const image = await storage({ stream });
		dataR = {...dataR,photo:image.url};
	}
	console.log(dataR);
	return createRelease(dataR);

};

const deleteRelease = async(_, args) => {
	await deleteReleaseByID(args.id);
	return {
		code:204,
		message:'Release removed successfully'
	};

};



module.exports = {
	newRelease,
	deleteRelease
};
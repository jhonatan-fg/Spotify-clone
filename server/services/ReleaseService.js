const Release = require('../models/Releases');

const createRelease = (dataR) => {
	return Release.create(dataR);
};
const getRelease = (args) => {
	return Release.find(args).exec();
};
const getReleaseByID =  (_id) => {
	return Release.findOne({_id}).exec();
};
const updateReleaseByID = (id, dataR) =>{
	return Release.findOneAndUpdate({_id:id},{$set :{ ...dataR }});
};
const deleteReleaseByID = (id) =>{
	return Release.findOneAndUpdate({_id:id});
};


module.exports = {
	getRelease,
	getReleaseByID,
	createRelease,
	updateReleaseByID,
	deleteReleaseByID
} ;
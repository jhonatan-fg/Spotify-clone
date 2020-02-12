const { getRelease, getReleaseByID } = require('../../services/ReleaseService');


const allRelease = (root,args,context,info) => {
	return getRelease(args);
};

const getOneRelease = (root,args,context,info)  => {
	if (args.id){
		return getReleaseByID(args.id);
	}else {
		throw Error('You need to choose id');
	}
};


module.exports = {
	allRelease,
	getOneRelease
};
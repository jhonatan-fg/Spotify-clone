const cloudinary = require('cloudinary');

const storage = ({ stream }) => {

	cloudinary.config({
		cloud_name:'dymdzvrb5',
		api_key:'878469216999988',
		api_secret:'Ws_L5ctOk1cfTeqW-4Eo21Rwc08'
	});

	return new Promise((resolve,reject) => {
		const buffer = cloudinary.v2.uploader.upload_stream((err,result) => {
			if(err) reject(err);
			resolve(result);
		});//chunks

		stream.pipe(buffer);

	});

};

module.exports = storage;
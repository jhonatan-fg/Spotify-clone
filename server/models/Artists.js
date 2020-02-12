const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtistSchema  = new Schema({
	name :{
		type:String,
		required:true
	},
	description :{
		type:String,
		required:true,
	},
	cover:{
		type:String
	},
	releases:{
		type:Schema.Types.ObjectId,
		ref:'releases'
	},});

module.exports = mongoose.model('artists',ArtistSchema);
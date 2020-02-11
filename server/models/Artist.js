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
	banner:{
		type: String
	},
}, {timestamps:true} );

module.exports = mongoose.model('artist',ArtistSchema);
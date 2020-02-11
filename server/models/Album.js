const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AlbumSchema  = new Schema({
	title :{
		type:String,
		required:true
	},
	description :{
		type:String,
		required:true,
	},
	date :Date,
	banner:{
		type: String
	},
	tags:{
		type:[String]
	},
	is_active:{
		type: Boolean,
		default: true
	}

},{timestamps:true} );

module.exports = mongoose.model('album',AlbumSchema);
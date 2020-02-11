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
	genre:{
		type:[String]
	},
}, {timestamps:true} );

module.exports = mongoose.model('album',AlbumSchema);
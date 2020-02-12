const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ReleaseSchema  = new Schema({
	cover:{
		type: String
	},
	title :{
		type:String,
		required:true
	},
	year :{
		type:String,
		required:true,
	},
	date :Date,
	songs:{
		type:String,
		required:true,
	},
	duration:{
		type:[String]
	},
}, {timestamps:true} );

module.exports = mongoose.model('releases',ReleaseSchema);
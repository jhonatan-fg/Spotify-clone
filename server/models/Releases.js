const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReleaseSchema  = new Schema({
	title :{
		type:String,
		required:true
	},
	cover:{
		type:String
    },
    date:{
        type:Date
    },
	songs:{
		type:String
	//	ref:''
    },
    duration:{
        type:String
    }});
    

module.exports = mongoose.model('releases',ReleaseSchema);
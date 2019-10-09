const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = Schema({
	name:{type: String},
	last:{type: String},
	year:{type: String},
	profession:{type: String},
	interes:{type: String},
	religion:{type: String},
	originalname:{type: String},
	filename:{type: String},
        path:{type: String},
        created_at:{type: Date, default: Date.now()},
	status:{
		type: Boolean,
		default: false
	}

});
 

module.exports = mongoose.model('profiles',profileSchema);

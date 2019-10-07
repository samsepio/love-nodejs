const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = Schema({
	name:{type: String},
	last:{type: String},
	user:{type: String},
	year:{type: String},
	profession:{type: String},
	interests:{type: String},
	religion:{type: String},
	password:{type: String},
	originalname:{type: String},
	filename:{type: String},
        path:{type: String},
        create_at:{type: Date,default: Date.now()}

});
 
module.exports = mongoose.model('profiles',profileSchema);

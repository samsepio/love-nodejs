const mongoose=require('mongoose');
const Schema = mongoose.Schma;

const imageSchema = new Schema({
	originalname:{type: String},
	path:{type: String},
	create_at:{type: Date,default: Date.now()}
});

module.exports = mongoose.model('images',imageSchema);

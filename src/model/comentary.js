const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const comentarySchema = Schema({
	comentary: {type: String}
});

module.exports = mongoose.model('comentarys',comentarySchema);

const mongoose=require('mongoose');
const bcrypt=require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = Schema ({
	user:{type: String},
	email:{type: String},
	password:{type: String}
});

//creamos un metodo apartir del userschema esto para que tome los datos de la bas de datos el metodo se llama encryptpassword y le pasamos el dato passwrord luego le decimos que lo bamos a encriptar 10 veses
userSchema.methods.encryptPassword = (password) => {
	bcrypt.hashSync(password,bcrypt.genSaltSync(10));
};

//creamos otro metodo llamado comparepassword y lo manejamos con un funcion le pasamos password y le decimos que me retorne la comparacionde el password ya encrupttado con el password que el usuario coloco
userSchema.methods.comparePassword = function (passwrod) {
	return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users',userSchema);

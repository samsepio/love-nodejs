const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../model/user');

passport.serializeUser((user, done) => {
	done(null,user.id)
});

passport.deserializeUser(async (id, done) => {
	const user = await User.findById(id);
  	done(null, user);
});

//le decimos que bamos a usar password y que esta atutenticacion se va a llamar local-signup creamos una nueva autenticacion le damos los datos aceptamos otros datos 
passport.use('local-signup', new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
  	passReqToCallback: true
}, async (req, email, password, done) => {
	//le decimos que me busque en la base de datos un email si encuentra el email que me mande un mensaje esto con connec-flash le ponemos un nombre a ese menaje y el contenido del mensaje despues con un if le decimos que si existe me retorne el emnsaje si no que me guarde los datos en la bese de datos:
  	const user = await User.findOne({'email': email})
  	if(user) {
    		return done(null, false, req.flash('signupMessage', 'El Correo Ya A Sido Tomado'));
  	} else {
    		const newUser = new User();
    		newUser.email = email;
    		newUser.password = newUser.encryptPassword(password);
    		await newUser.save();
    		done(null, newUser);
	}
}));

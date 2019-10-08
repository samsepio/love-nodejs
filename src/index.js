const express=require('express');
const path=require('path');
const morgan=require('morgan');
const mongoose=require('mongoose');
const passport=require('passport');
const engine=require('ejs');
const flash=require('connect-flash');
const session=require('express-session');
const multer=require('multer');
const {format} = require('timeago.js');
const uuid=require('uuid/v4');
const app=express();

mongoose.connect('mongodb+srv://walter:3219329910@database1-wegwd.mongodb.net/test?retryWrites=true&w=majority')
	.then(db => console.log('conectado a la base de datos'))
	.catch(err => console.log(err));

app.set('puerto',process.env.PORT || 8000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
	destination: path.join(__dirname, 'public/img/uploads'),
	limits: { fileSize: 2000000 },
	filename: (req, file, cb, filename) => {
		cb(null, uuid() + path.extname(file.originalname));
	}
});
app.use(multer({
	storage
}).single('image'));
app.use((req,es,next) => {
	app.locals.format = format;
	next();
});
app.use(require('./routes'));

app.use(express.static(path.join(__dirname,'./public')));

const server = app.listen(app.get('puerto'),()=>{
	console.log(`servidor ejecutandose en el puerto ${app.get('puerto')}`);
});

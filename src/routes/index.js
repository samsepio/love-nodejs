const express=require('express');
const router=express.Router();
const Profile=require('../model/profile');

router.get('/',(req,res,next)=>{
	res.render('index');
});
router.get('/signup',async(req,res,next)=>{
	res.render('signup');
});
router.get('/work',async(req,res,next)=>{
	const profiles = await Profile.find();
	res.render('work',{profiles});
});
router.get('/delete/:id',async(req,res,next)=>{
	let {id} = req.params;
	await Profile.remove({_id: id});
	res.redirect('/work');
});
router.get('/edit/:id',(req,res,next)=>{
	res.render('perfil');
});
router.post('/signup',async(req,res,next)=>{
	const profile = new Profile();
	profile.name = req.body.name;
	profile.last = req.body.last;
	profile.user = req.body.user;
	profile.password = req.body.password;
	profile.originalname = req.file.originalname;
	profile.path = '/img/uploads/' + req.file.filename;
	await profile.save();	
	console.log(profile);
	res.redirect('/work');
	console.log(req.file);
});

module.exports = router;

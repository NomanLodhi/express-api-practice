const express=require('express')
const routes=express.Router()
const {getuser,setuser,updateuser,deleteuser}=require('../controllers/user.controller')
const {register,signIn}=require('../controllers/usersign.controller')
const sigInmw=require('../middlewares/authentication.middleware')
const signInmw = require('../middlewares/authentication.middleware')
routes.get('/',getuser)
routes.put('/',setuser)
routes.patch('/',updateuser)
routes.delete('/',deleteuser)

// User signIn and register routes
routes.post('/register',register)
routes.post('/signin',signInmw,signIn)

module.exports=routes

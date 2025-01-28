const express=require('express')
const routes=express.Router()
const {getuser,setuser,updateuser,deleteuser}=require('../controllers/user.controller')

routes.get('/',getuser)
routes.put('/',setuser)
routes.patch('/',updateuser)
routes.delete('/',deleteuser)

module.exports=routes

const express=require('express');
const routes=express.Router()
const {setadmin,getadmin,updateadmin,deleteadmin}=require('../controllers/admin.controller')

routes.get('/',getadmin)
routes.put('/',setadmin)
routes.patch('/',updateadmin)
routes.delete('/',deleteadmin)

module.exports=routes
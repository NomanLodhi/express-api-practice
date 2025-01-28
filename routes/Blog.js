const express=require('express');
const routes=express.Router()
const {getblog,setblog,deleteblog,updateblog}=require('../controllers/blog.controller')

routes.get('/',getblog)
routes.put('/',setblog)
routes.patch('/',updateblog)
routes.delete('/',deleteblog)

module.exports=routes

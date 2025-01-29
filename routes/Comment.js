const express=require('express')
const routes=express.Router()
const {getcomment,setcomment,updatecomment,deletecomment}=require('../controllers/comment.controller')

routes.get('/',getcomment)
routes.put('/',setcomment)
routes.patch('/',updatecomment)
routes.delete('/',deletecomment)

module.exports=routes
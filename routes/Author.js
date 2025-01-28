const express=require('express');
const routes=express.Router()
const {getauthor,setauthor,updateauthor,deleteauthor}=require('../controllers/author.controller')
routes.get('/',getauthor)
routes.put('/',setauthor)
routes.patch('/',updateauthor)
routes.delete('/',deleteauthor)

module.exports=routes
const express=require('express');
const routes=express.Router()
const {setcategory,getcategory,updatecategory,deletecategory}=require('../controllers/category.controller')
routes.get('/',getcategory)
routes.put('/',setcategory)
routes.patch('/',updatecategory)
routes.delete('/',deletecategory)

module.exports=routes
const express=require('express');
const app=express();
const blog=require('./routes/Blog');


app.use('/api/v1/blog',blog)

module.exports=app
const express=require('express');
const app=express();
const blog=require('./routes/Blog');
const category=require('./routes/Category')
const author=require('./routes/Author')
const user=require('./routes/User')


app.use('/api/v1/blog',blog)
app.use('/api/v1/category',category)
app.use('/api/v1/author',author)
app.use('/api/v1/user',user)

module.exports=app
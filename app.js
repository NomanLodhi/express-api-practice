const express=require('express');
const app=express();
const blog=require('./routes/Blog');
const category=require('./routes/Category')
const author=require('./routes/Author')
const user=require('./routes/User')
const admin=require('./routes/Admin')
const comment=require('./routes/Comment')
app.use(express.json())


app.use('/api/v1/blog',blog)
app.use('/api/v1/category',category)
app.use('/api/v1/author',author)
app.use('/api/v1/user',user)
app.use('/api/v1/admin',admin)
app.use('/api/v1/comment',comment)

module.exports=app
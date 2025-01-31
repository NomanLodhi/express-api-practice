const app= require('./app')
const env=require('dotenv');
env.config()

let port=process.env.PORT
app.listen(port,(err)=>{
    if(err){
        console.log(`Error while starting server ${err}`)
    }
    else{
        console.log(`Server started successfully at port ${port}`)
    }
        
})



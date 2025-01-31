const env=require('dotenv')
const JWT=require('jsonwebtoken')
env.config()


const signInmw=(req,res,next)=>{
    console.log('SignIn MW')
    let token=req.headers.Authorization ||  req.headers.authorization
        console.log(token)

    let tokenChange=token.split(' ')[1]
    JWT.verify(tokenChange,process.env.JWT_TOKEN,(err)=>{
        if(!tokenChange){
            res.status(500).json({msg:err})
        }
        else{
            next()
        }
    })
}
module.exports=signInmw
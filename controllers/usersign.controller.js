const validator=require('validator');
const JWT=require('jsonwebtoken');
const env=require('dotenv');
env.config()
const bcrypt=require('bcryptjs');
const DB={
    email:'nomanlodhi@test.com',
    password:'$2a$14$USBkXARzaHkmmzMqelgn4ul86OKd6U02Gu2erGb3esKnUPPbDNF0C'
}
const register=async(req,res)=>{
    try{
       const {email,username,password}=req.body
       if(!email || !username || !password){
        res.status(401).json({err:true,msg:'All informations are required to register'})
    }
    if(!validator.isEmail(email)){
        res.status(401).json({err:true,msg:'Kindly enter valid mail'})
    }
    if(!validator.isAlphanumeric(username)){
        res.status(401).json({err:true,msg:'Username must contain alphnumeric characters'})
    }
    if(!validator.isStrongPassword(password)){
        res.status(401).json({err:true,msg:'Please enter a strong password'})
    }
        const SALT=await bcrypt.genSalt(14);
        const MIX_SALT=await bcrypt.hash(password,SALT)
        console.log(MIX_SALT)
       res.json({msg:'User registered',data:req.body})
    }
    catch(error){
        res.json({msg:error.message})
    }
}
const genToken=(email)=>{
 return JWT.sign({email},process.env.JWT_TOKEN,{expiresIn:"3min"})
}
const signIn=async (req,res)=>{
    try{
        let systemMail=DB.email;
        let systemPassword=DB.password;
        const {email,password}=req.body
        let compare=await bcrypt.compare(password,systemPassword)
        if(!email && !password){
         return   res.status(401).json({err:true,msg:'Please enter required fields'})
        }

        if(!(systemMail==email)){
           return res.status(401).json({err:true,msg:'Please enter valid email'})
        }

        if(!compare){
          return  res.status(401).json({err:true,msg:"Please enter correct email"})
        }
let token=genToken(email)
        res.json({msg:'user signIn',data:{email,Token:token}})
    }
    catch(error){
        res.json({msg:error.message})
    }
}

module.exports={register,signIn}
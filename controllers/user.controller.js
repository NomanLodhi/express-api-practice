const getuser=(req,res)=>{
    try{
        res.json({msg:'get user'})
    }
    catch(error){
        console.log(err)
    }
}
const setuser=(req,res)=>{
    try{
        res.json({msg:'setting user'})
    }
    catch(error){
        console.log(err)
    }
}
const updateuser=(req,res)=>{
    try{
        res.json({msg:'updating user'})
    }
    catch(error){
        console.log(err)
    }
}
const deleteuser=(req,res)=>{
    try{
        res.json({msg:'delete user'})
    }
    catch(error){
        console.log(error)
    }
}

module.exports={setuser,getuser,updateuser,deleteuser}
const getadmin=(req,res)=>{
    try{
        res.send({msg:'get admin'})
    }
    catch(error){
        console.log(error)
    }
}
const setadmin=(req,res)=>{
    try{
        res.send({msg:'set admin'})
    }
    catch(error){
        console.log(error)
    }
}
const updateadmin=(req,res)=>{
    try{
        res.send({msg:'update admin'})
    }
    catch(error){
        console.log(error)
    }
}
const deleteadmin=(req,res)=>{
    try{
        res.send({msg:'delete admin'})
    }
    catch(error){
        console.log(error)
    }
}

module.exports={getadmin,setadmin,updateadmin,deleteadmin}
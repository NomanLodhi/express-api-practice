const getcomment=(req,res)=>{
    try{
        res.send({msg:'get comment'})
    }
    catch(error){
        console.log(error)
    }
}
const setcomment=(req,res)=>{
    try{
        res.send({msg:'set comment'})
    }
    catch(error){
        console.log(error)
    }
}
const updatecomment=(req,res)=>{
    try{
        res.send({msg:'update comment'})
    }
    catch(error){
        console.log(error)
    }
}
const deletecomment=(req,res)=>{
    try{
        res.send({msg:'delete comment'})
    }
    catch(error){
        console.log(error)
    }
}

module.exports={getcomment,setcomment,updatecomment,deletecomment}
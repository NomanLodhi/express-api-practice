const getauthor=(req,res)=>{
    try{
        res.json({msg:`get blog's author`})
    }
    catch(error){
        console.log(error)
    }
}
const setauthor=(req,res)=>{
    try{
        res.json({msg:`set blog's author`})
    }
    catch(error){
        console.log(error)
    }
}
const updateauthor=(req,res)=>{
    try{
        res.json({msg:`update blog's author`})
    }
    catch(error){
        console.log(error)
    }
}
const deleteauthor=(req,res)=>{
    try{
        res.json({msg:`delete blog's author`})
    }
    catch(error){
        console.log(error)
    }
}


module.exports={setauthor,getauthor,deleteauthor,updateauthor}
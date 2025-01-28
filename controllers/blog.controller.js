const getblog=(req,res)=>{
  try{
    res.json({msg:"Blog api"})
    console.log('Get blog api')
  }
  catch(error){
    console.log(error)
  }
}

const updateblog=(req,res)=>{
    try{
        
        res.json({msg:'Blog updated'})
        console.log('Blog updated successfully')
    }
    catch(error){
        console.log(error)
    }
}
const setblog=(req,res)=>{
    try{
        res.json({msg:'Blog set up done'})
        console.log('Blog set up done successfully')
    }
    catch(error){
        console.log(error)
    }
}
const deleteblog=(req,res)=>{
    try{
        res.json({msg:'Blog deleted'})
        console.log('Blog deleted successfully')
    }
    catch(error){
        console.log(error)
    }
}

module.exports={updateblog,getblog,setblog,deleteblog}
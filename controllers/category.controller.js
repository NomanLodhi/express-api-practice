const getcategory=(req,res)=>{
    try{
        res.json({msg:` get Blog's category`})
    }
    catch(error){
        console.log(error)
    }
}
const setcategory=(req,res)=>{
    try{
        res.json({msg:`set Blog's category`})
    }
    catch(error){
        console.log(error)
    }
}
const updatecategory=(req,res)=>{
    try{
        res.json({msg:`update Blog's category`})
    }
    catch(error){
        console.log(error)
    }
}
const deletecategory=(req,res)=>{
    try{
        res.json({msg:`delete Blog's category`})
    }
    catch(error){
        console.log(error)
    }
}

module.exports={setcategory,getcategory,updatecategory,deletecategory}
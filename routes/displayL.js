const route=require('express').Router()

route.get('/displayL',(req,res)=>{
    res.render(displayL.ejs)
})

module.exports=route
const route=require('express').Router()

route.get('/displayS',(req,res)=>{
    res.render(displayS.ejs)
})

module.exports=route
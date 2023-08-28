const express=require('express');
const router=express.Router();

router.use('/tasks',require('./tasks'));
router.get('/',(req,res)=>{
    return res.send('<h1>Server Running</h1>');
});
module.exports=router;

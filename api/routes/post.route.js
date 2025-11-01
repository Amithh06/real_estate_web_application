import express from "express";
const router=express.Router();

router.get("/text",(req,res)=>{
   res.send('koi')
});
export default router;

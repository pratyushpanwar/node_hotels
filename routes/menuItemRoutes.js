const express = require('express');
const router = express.Router();
const MenuItem =require('../Models/MenuItem');

//method to post menuItem
router.post('/', async(req,res)=>{
    try{
      const data= req.body
  
      //create a new menuItem
      const newMenuItem= new MenuItem(data);
      
      // save new MenuItem
      const response= await newMenuItem.save();
      console.log('data saved');
    res.status(200).json(response);
  
    }catch(err){
    console.log(err);
    res.status(500).json({error: 'internal server error'});
  
    }
  })
  
  // get menu item data
  router.get('/', async(req,res)=>{
    try{
      const data = await MenuItem.find();
      console.log('data found');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    }
  })
//new change added for pus purposes
  module.exports = router;
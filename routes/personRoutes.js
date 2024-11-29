const express = require('express');
const router = express.Router();
const Person = require('./../Models/Person');
const { findByIdAndDelete } = require('../Models/MenuItem');


//POST route to add person
router.post('/', async (req,res)=>{
    try{
      const data =req.body
  
    // creat a new person data
    const newPerson = new Person(data);
  
    // save the new person data
    const response = await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
    
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'internal server error'});
  
  }
   })

   //get method th get the person
router.get('/', async (req,res)=>{
    try{
      const data= await Person.find();
      console.log('data found');
      res.status(200).json(data);
    }catch(err){
      console.log(err);
      res.status(500).json({error:'internal server error'});
    
    }
  })


   //paameter data
router.get('/:workType', async (req,res)=>{
    try{
      const workType= req.params.workType; //extract worktype from URL
      
      if(workType=='chef'|| workType=='manager'){

        const response = await Person.find({work:workType});
      
        console.log('response found');
        res.status(200).json(response);

      }else{
        res.status(404).json({error:'not found'});
      }
    }catch(err){
      console.log(err);
    res.status(500).json({error:'internal server error'});
    }
  })

router.put('/:id', async(req,res)=>{
  try{
    const personId= req.params.id;//extracting id from URL
    const updatedPersonData= req.body;//updated data for person

    const response= await Person.findByIdAndUpdate(personId,updatedPersonData,{
      new: true,
      runValidators:true,
    })
    if(!response){
      return res.status(404).json({error: 'person data not found'});

    }

    console.log('data updated');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

//deleting person by id
router.delete('/:id', async(req,res)=>{
  try{
    const personId= req.params.id;//id extracted from URL

    const response= await Person.findByIdAndDelete(personId); //id deleted
    
    if(!response){
      return res.status(404).json({error: 'person data not found'});
    }
    console.log('data deleted');
    res.status(200).json();

  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

  module.exports = router;


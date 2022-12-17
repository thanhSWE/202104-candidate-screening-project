const router = require('express').Router();

const todoListModel = require('../models/models');


router.post("/api/items", async (req,res)=>{
    try{
        const newItem = new todoListModel({
            item: req.body.item

        })
    
        const saveItem = await newItem.save()
        res.status(200).json(saveItem);
    }catch(err){
        res.json(err);
    }
    
})

router.delete('/api/items', async (req,res)=>{
    try{
        const {itemName} = req.body
        const result = await todoListModel.findOneAndDelete({item: itemName});
        return res.status(200).json(result)
    }catch(err){
        res.json(err);
    }
})
router.get('/api/items', async (req,res)=>{
    try{
        const allTodoList = await todoListModel.find({});
        res.status(200).json(allTodoList)
    }catch(err){
        res.json(err);
    }
})

module.exports = router;

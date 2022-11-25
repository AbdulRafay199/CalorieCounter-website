const express = require('express');
const router = express.Router();
const food = require('../Model/Food')


// add food
router.post('/addfood', async (req,res)=>{
    const foodname = await food.findOne({name: req.body.name});
    if(foodname){
        res.status(400).json("Food already exist in our database..Please add different food")
    }
    else{

        try {
            const fooddetails = await food.create({
                name: req.body.name,
                calories: req.body.calories,
                fat: req.body.fat,
                protien: req.body.protien,
                carbs: req.body.carbs,
                img: req.body.img,
                category: req.body.category
            })
            res.json(fooddetails);
        } catch (error) {
            console.log(error);
            res.status(500).json("Internal server error!")
        }

    }
})

// fetch food
router.get('/getfood', async (req,res)=>{
        try {
            const fooddetails = await food.find();
            res.json(fooddetails);
        } catch (error) {
            console.log(error);
            res.status(500).json("Internal server error!")
        }
})

// update food
router.put('/updatefood/:id', async (req,res)=>{
    try {
        const fooddetails = await food.findById(req.params.id);
        if(!fooddetails){
            res.status(400).json("No food found!")
        }
        else{
            const updatedfood = await fooddetails.updateOne({
                name: req.body.name,
                calories: req.body.calories,
                fat: req.body.fat,
                protien: req.body.protien,
                carbs: req.body.carbs,
                img: req.body.img,
                category: req.body.category
            })
            res.json(updatedfood);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!")
    }
})

// delete food
router.delete('/deletefood/:id', async (req,res)=>{
    try {
        const fooddetails = await food.findById(req.params.id);
        if(!fooddetails){
            res.status(400).json("No food found!")
        }
        else{
            const updatedfood = await fooddetails.deleteOne();
            res.json({updatedfood,msg: "note deleted successfuly"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!")
    }
})

module.exports = router;
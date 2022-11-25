const express = require('express');
const router = express.Router();
const usercons = require('../Model/Usercons')
const fetchuser = require('../middleware/fetchuserid')

// add consumptions : login required
router.post('/addcons',fetchuser, async (req,res)=>{
    try {

        const userconsdetails = await usercons.create({
            userid: req.user.id,
            name: req.body.name,
            calories: req.body.calories,
            fat: req.body.fat,
            protien: req.body.protien,
            carbs: req.body.carbs,
            quantity: req.body.quantity,
            img: req.body.img,
        })
        res.json(userconsdetails);

    } catch (error) {

        console.log(error);
        res.status(500).json("internal error occurred");
    }
})


// fetch consumptions : login required
router.get('/fetchcons',fetchuser, async (req,res)=>{
    try {

        const userconsdetails = await usercons.find({userid: req.user.id})
        res.json(userconsdetails);

    } catch (error) {

        console.log(error);
        res.status(500).json("internal error occurred");
    }
})

// delete consumptions : login required
router.delete('/deletecons/:id',fetchuser, async (req,res)=>{
    try {
        const userconsumption = await usercons.findById(req.params.id)
        if(!userconsumption){
            res.status(404).json("User consumption data does not exist for that particular id");
        }
        else{

            if(userconsumption.userid == req.user.id){
                const userconsdetails = await usercons.findByIdAndDelete(req.params.id);
                res.json(userconsdetails);
            }
            else{
                res.status(400).json("You are not allowed to delete other user's data");
            }
        }
    } catch (error) {

        console.log(error);
        res.status(500).json("internal error occurred");
    }
})

module.exports = router;
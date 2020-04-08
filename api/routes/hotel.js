var express = require('express');
var router = express.Router();
const User = require('../model/User');

//Read Route
router.get('/', function(req, res, next) {
  User.find()
  .then(users => {
      res.send(users)
  }).catch(err => {
      res.status(500).send("some error occured")
  })
});

//Create Route
router.post('/add', async(req, res) => {
    //Check if room is free or Not!
    //If Guest Checkout it Again becomes free
    const RoomOccupied = await User.findOne({ Hotel_Name: req.body.hotel_name,
                                             Hotel_Location: req.body.hotel_location,
                                             Room_number: req.body.room_number,
                                             Check_OutDate: req.body.checkout
                                            });
    if(RoomOccupied) return res.status(400).send('Room is not Free!');

    // then add new Data
    const user = new User({
        Hotel_Name: req.body.hotel_name,
        Hotel_Location: req.body.hotel_location,
        Room_number: req.body.room_number,
        Room_Type: req.body.room_type,
        Guest_Names: req.body.guest_names,
        Guest_Ids: req.body.guest_ids,
        Check_OutDate: req.body.checkout
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err){
        res.status(400).send(err);
    }
});

//Update Route
router.put('/:userid', function(req, res){
    console.log(req.params.userid)
    User.findByIdAndUpdate(req.params.userid, { 
       $set: {
        Hotel_Name: req.body.hotel_name,
        Hotel_Location: req.body.hotel_location,
        Room_number: req.body.room_number,
        Room_Type: req.body.room_type,
        Guest_Names: req.body.guest_names,
        Guest_Ids: req.body.guest_ids,
        Check_OutDate: req.body.checkout
       }
    }, {new: true})
    .then(function (doc){
        res.status(200).send("updated Successfully!");
    })
})

//Delete Route
router.delete('/:userid', function(req,res){
    User.findByIdAndRemove(req.params.userid)
    .then(function (doc){
        res.status(200).send("Deleted");
    })
})

module.exports = router;
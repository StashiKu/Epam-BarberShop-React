const express = require('express');
const router = express.Router();

const Appointment = require('../../models/Appointment');

//@route  POST api/appointment
//@desc   Create An Appointment
//@access Public
router.post('/', async (req, res) => {
    
    const newAppointment = await new Appointment({
        name: req.body.name,
        date: req.body.date,
        email: req.body.email,
        tel: req.body.tel,
        barber: req.body.barber,
        totalPrise: req.body.totalPrise
    });
    // if (newAppointment) {

    // }
    newAppointment.save()
        .then(item => { 
            res.json(item);
        })
        .catch(err => {
            res.json({code: 1, message: 'Creation of Appointment Failed'})
            console.log(err)}) 
});

module.exports = router;
    
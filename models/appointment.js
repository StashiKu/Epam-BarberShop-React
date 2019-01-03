const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    tel: {
        type: String,
        required: false,
    },
    barber: {
        type: String,
        required: false,
    },
    totalPrise: {
        type: Number,
        required: false
    }
});

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema)
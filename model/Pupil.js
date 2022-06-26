const mongoose = require('mongoose');

const PupilSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [ true, 'First name is required to register a student']
    },
    lastname: {
        type: String,
        required: [ true, 'Last name is required to register a student']
    },
    middlename: {
        type: String,
    },
    currentclass: {
        type: String,
    },
    dateofbirth: {
        type: Date,
        required: [ true, 'You must provide a date of birth']
    },
    address: {
        type: String,
    },
    registeredby: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        default: 'Male'
    }
});

module.exports = mongoose.model('Pupil', PupilSchema);
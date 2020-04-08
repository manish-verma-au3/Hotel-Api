const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Hotel_Name: {
        type: String,
        required: true,
    },
    Hotel_Location: {
        type: String,
        required: true,
    },
    Room_number: {
        type: Number,
        required: true,
    },
    Room_Type: {
        type: String,
        required: true,
    },
    Guest_Names: {
        type: String,
        required: true,
    },
    Guest_Ids: {
        type: String,
        required: true,
    },
    Check_InDate: {
        type: Date,
        default: Date.now
    },
    Check_OutDate: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
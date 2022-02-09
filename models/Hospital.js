const mongoose = require('mongoose');
const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true,'Please add name'],
        unique: true,
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    address: {
        type: String,
        required: [true,'Please add an adress']
    },
    district: {
        type: String,
        required: [true,'Plase add a district']
    },
    province: {
        type: String,
        required: [true,'Please add a province']
    },
    postalcode: {
        type: String,
        required: [true,'Plase add a postalcode'],
        maxlength: [5,'Postal Code can not be more than 5 digits']
    },
    tel: {
        type: String,
    },
    region: {
        type: String,
        required: [true,'Please add a region']
    }
});

module.exports = mongoose.model('Hospital',HospitalSchema);

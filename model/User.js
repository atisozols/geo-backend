const mongoose = require('mongoose');
const {Schema} = mongoose
const userschema = new Schema({
    ip:{
        type: String,
        require: true
    },
    walkingPath:{
        type:[{
            location: String,
            answered: Boolean,
            found: Boolean
        }],
        default: [{location:"pirmstagadne", answered:false, found:false}, {location:"tagadne", answered:false, found:false}, {location:"pectagadne", answered: false,found:false}]
    }
})
module.exports = mongoose.model('User', userschema)
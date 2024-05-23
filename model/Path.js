const mongoose = require('mongoose');
const { stringify } = require('uuid');
const {Schema} = mongoose
const pathSchema = new Schema({
    ip:{
        type: String,
        require: true
    },
    path:{
        questions:[{
            id: String,
            answered: {
                type: Boolean,
                default: false
            },
            found: {
                type: Boolean,
                default: false
            },
            question: String,
            answers: [String],
            correct: Number
        }]
    }

})
module.exports = mongoose.model('Path', pathSchema)
const mongoose = require('mongoose');

// defined type of data
const schema = mongoose.Schema({
    title: {
        type: String,
        trim: true, // cut whitespace of title or something...
        require: [true, 'name is required']
    },
    content: String,
    isPublished: {
        type: Boolean,
        default: false // cans set a default value of field in mongodb 
    },
    author: mongoose.Types.ObjectId, // mo
    created: {
        type: Date,
        default: () => new Date()
    }
});

//create a model
module.exports = mongoose.model('Post', schema);
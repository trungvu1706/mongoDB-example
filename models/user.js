const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment'); // chua cai moment
const { User } = require('.');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String
    },
    lastLogin: {
        type: Date
    }

});

schema.methods.isPasswordCorrect = function(password) { // defined a document method
    return bcrypt.compare(password, this.password); // this represents user (document) not User 
}

schema.statics.findActiveUser = function() { // defined model method 
    const sevenDaysAgo = moment().subtract(7, 'day').toDate();
    return this.find({ // this represents User 
        $lte: sevenDaysAgo
    })
}

module.exports = mongoose.model('User', schema);
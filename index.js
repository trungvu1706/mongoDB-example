require('dotenv').config();

const mongoose = require('mongoose');
const { Post, User } = require('./models');


// connect URL
const MONGO_URI = process.env.MONGO_URL;

mongoose.connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(async() => { // context => this
    console.log('connected successfully to server');
    const user = await User.findById("5fe9fa2e3399dd9329ad91d6").select({
        password: 1 // select value thi de value la 1 , con khong select value thi de value la 0 
    })
    console.log(await user.isPasswordCorrect('123'));
    mongoose.disconnect();
}).catch((err) => {
    console.error(err);
});
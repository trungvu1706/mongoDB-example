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

    // const post = new Post({
    //     title: 'thuy kieu',
    //     content: 'def'
    // })
    // await post.save();

    // const user = await User.create({ // user is instance of User
    //     name: 'Trungvu',
    //     email: 'vtrung1795@gmail.com',
    //     password: '123'
    // });
    // console.log(user);
    // const isPasswordCorrect = await user.isPasswordCorrect('123'); //  => instance method

    const activeUsers = await User.findActiveUser(); // => static method
    // console.log({ isPasswordCorrect });
    mongoose.disconnect();
}).catch((err) => {
    console.error(err);
});
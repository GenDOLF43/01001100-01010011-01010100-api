const mongoose = require('mongoose')
require('dotenv').config()
const db = process.env.DB

const connectDB = async () => {
    try{
        await mongoose.connect(db);
        console.log('mongoDB connect!!!');
    } catch (error){
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
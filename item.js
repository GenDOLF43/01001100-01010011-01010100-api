const mongoose = require('mongoose')
const Schema = mongoose.Schema

const item = new Schema({
    balance: Number,
    tg: Number,
    name :String,
    NoFirst: String,
    AdminUserActive:Boolean,
    OneClick :Number,
},{timestamps: true});

const lotery = new Schema({
    tg: Number,
    name: String,
    sumLotery: Number,
    procent: Number,
    lotery: Boolean,
    winBalance: Number,
    Winner: Boolean
},{timestamps: true});

const Promo = new Schema({
    name: String,
    summa: Number,
    quantity: Number,
    id_user: Number
},{timestamps: true})

const promoSchem = mongoose.model('PromoCode', Promo)
const AccauntSchem = mongoose.model('AccountSchem', item)
const LoteryModel = mongoose.model('LoterySchem', lotery)


module.exports = {AccauntSchem,LoteryModel,promoSchem};




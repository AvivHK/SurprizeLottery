const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lotterySchema = new Schema ({
    entryFee: Number,
    isProduct: Boolean,
    moneyPrize: Number,
    productPrize: String,
    productPic: String,
    productDscription: String,
    dueDate: Date,
    usersIn: Number,
    usersmax: Number,
    endBytime: Boolean,
    users: [Object],
    winner: Object,
    done: Boolean
})
const Lottery = mongoose.model(`lottery`, lotterySchema)

module.exports = Lottery
const express = require('express')
const router = express.Router()
const Lottery = require('../models/Lottery')



router.get('/lottery/:isProduct', async (req, res) => {
    const { isProduct } = req.params
    if (isProduct) {
        await Lottery.find({ $and: [{ isProduct: { $e: true } }, { done: { $e: false } }] }).exec((err, lotteries) => {
            res.send(lotteries)
        })
    }
    else {
        await Lottery.find({ $and: [{ isProduct: { $e: false } }, { done: { $e: false } }] }).exec((err, lotteries) => {
            res.send(lotteries)
        })
    }
})

router.put('/lottery/:lotteryID', async (req, res) => {
    const { lotteryID } = req.params;
    let userBody = JSON.parse(req.userBody)
    await Lottery.findById(lotteryID)
        .exec(function (err, response) {
            response.users.push(userBody)
        })
})

router.get('/lottery/winners', async function (req, res) {
    console.log(`jjhdjfh`);
    const winners = []
    await Lottery.find({ done: { $e: true } })
        .exec(function (err, response) {
            response.forEach(u => winners.push(u));
            res.send(winners)
        })
})

router.post('/lottery/newLottery', async (req, res) => {
    let tempLottery = req.body
    console.log(tempLottery);
    let newLottery = new Lottery({
        entryFee: tempLottery.entryFee,
        isProduct: tempLottery.isProduct,
        moneyPrize: tempLottery.moneyPrize,
        productPrize: tempLottery.productPrize,
        productPic: tempLottery.productPic,
        productDescription: tempLottery.productDescription,
        dueDate: tempLottery.dueDate,
        usersIn: tempLottery.usersIn,
        usersMax: tempLottery.usersMax,
        endByTime: tempLottery.endByTime,
        users: tempLottery.users,
        winner: tempLottery.winner,
        done: tempLottery.done
    })
    await newLottery.save()
    res.send(newLottery)
})

module.exports = router

const express = require('express')
const router = express.Router()
const request = require('request')
const Lottery = require('../models/Lottery')


router.get('lottery/:isProduct', async (req, res) => {
    const { isProduct } = req.params
    if (isProduct) {
        Lottery.find({ $and: [{ isProduct: { $e: true } }, { done: { e: false } }] }).exec((err, lotteries) => {
            res.send(lotteries)
        })
    }
    else {
        Lottery.find({ $and: [{ isProduct: { $e: false } }, { done: { e: false } }] }).exec((err, lotteries) => {
            res.send(lotteries)
        })
    }
})

router.put('lottery/:lotteryID', async (req, res) => {
    const { lotteryID } = req.params;
    let userBody = JSON.parse(result.userBody)
    Lottery.findById(lotteryID)
        .exec(function (err, response) {
            response.users.push(userBody)
        })
})

router.get('lottery/winners', async (req, res) => {
    const winners = []
    Lottery.find({ done: { $e: true } })
        .exec(function (err, response) {
            response.forEach(u => winners.push(u));
            res.send(winners)
        })    
})

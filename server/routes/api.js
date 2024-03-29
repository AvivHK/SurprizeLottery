const express = require('express')
const router = express.Router()
const Lottery = require('../models/Lottery')


// Get Routes- send Lotteries Data

router.get('/lottery/:isProduct', async (req, res) => {
    const { isProduct } = req.params
    if (isProduct == "true") {
        await Lottery.find({ $and: [{ isProduct: true }, { done: false }] })
            .exec((err, lotteries) => {
                res.send(lotteries)
            })
    }
    else {
        await Lottery.find({ $and: [{ isProduct: false }, { done: false }] })
            .exec((err, lotteries) => {
                res.send(lotteries)
            })
    }
})

router.get('/oneLottery/:lotteryID', async (req, res) => {
    const { lotteryID } = req.params;
    await Lottery.findById(lotteryID).exec((err, result) => {
        res.send(result)
    })
})

router.get('/filterProducts/:filterType', async (req, res) => {
    const { filterType } = req.params
    await Lottery.find({ $and: [{ isProduct: false }, { productType: filterType }] })
    .exec((err, lotteries) => {
        console.log(`I want  ${lotteries}`);
        
        res.send(lotteries)
    })
})


// Post Route- posting a new lottery

router.post('/lottery/newLottery', async (req, res) => {
    let tempLottery = req.body
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


// Put Route- Update a lottery 

router.put('/lottery/:lotteryID', async (req, res) => {
    const { lotteryID } = req.params;
    let body = JSON.parse(JSON.stringify(req.body));
    await Lottery.findOneAndUpdate({ _id: lotteryID },
        { $push: { users: body } })
})



// Get Route- send an arr with a winner inside

router.get('/winners', async function (req, res) {
    const winners = []
    await Lottery.find({ done: true })
        .exec(function (err, response) {
            for (let i = 0; i < response.length; i++) {
                winners.push({
                    firstName: response[i].winner.firstName,
                    lastName: response[i].winner.lastName,
                    email: response[i].winner.email,
                    address: response[i].winner.address,
                    isProduct: response[i].isProduct,
                    productPrize: response[i].productPrize,
                    productDescription: response[i].productDescription,
                    moneyPrize: response[i].moneyPrize,
                    peoplePayToGetIn: response[i].users.length,
                    productPic: response[i].productPic,
                })
            }
            res.send(winners)
        })
})

// Put Route- Add a winner

router.put('/winner/:lotteryID', async (req, res) => {
    const { lotteryID } = req.params;
    let body = JSON.parse(JSON.stringify(req.body));
    await Lottery.findOneAndUpdate({ _id: lotteryID },
        { winner: body, done: true })
    res.end();
})




module.exports = router

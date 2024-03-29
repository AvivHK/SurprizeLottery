const mongoose = require('mongoose')
const Lottery = require('../server/models/Lottery')
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SurprizeLottery", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
   
   const dummyLotteries = [
        {
            entryFee: 10,
            isProduct: true,
            productPrize: "Electric Bike",
            productPic: "https://www.cwc.co.il/images/itempics/2403.jpg",
            productDescription: "Electric Bike",
            usersMax: 50,
            users: [{
                firstName: `nir`,
                lastName: `reani`,
                email: `nir@gmail.com`,
                address: `tel aviv`
            },
            {
                firstName: `aviv`,
                lastName: `hakmon`,
                email: `aviv@gmail.com`,
                address: `ramat gan`

            },
            {
                firstName: `ohad`,
                lastName: `shapira`,
                email: `ohadshap@gmail.com`,
                address: `herzelia`
            },
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`
            },
            {
                firstName: `gili`,
                lastName: `cohen`,
                email: `gili@gmail.com`,
                address: `jerusalem`
            },
            {
                firstName: `eli`,
                lastName: `levi`,
                email: `eli@gmail.com`,
                address: `Kibuz dafna`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            }],
            winner: {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            },
            done: true
        },
        {
            entryFee: 5,
            isProduct: true,
            productPrize: "Round-Trip",
            productPic: "https://www.liberaldictionary.com/wp-content/uploads/2019/01/round-trip-ticket-2.png",
            productDescription: "Round-Trip",
            usersMax: 2000,
            endByTime: false,
            users: [{
                firstName: `nir`,
                lastName: `reani`,
                email: `nir@gmail.com`,
                address: `tel aviv`
            },
            {
                firstName: `aviv`,
                lastName: `hakmon`,
                email: `aviv@gmail.com`,
                address: `ramat gan`

            },
            {
                firstName: `ohad`,
                lastName: `shapira`,
                email: `ohadshap@gmail.com`,
                address: `herzelia`
            },
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`
            },
            {
                firstName: `gili`,
                lastName: `cohen`,
                email: `gili@gmail.com`,
                address: `jerusalem`
            },
            {
                firstName: `eli`,
                lastName: `levi`,
                email: `eli@gmail.com`,
                address: `Kibuz dafna`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            }],
            done: false
        },
        {
            entryFee: 50,
            isProduct: true,
            productPrize: "Car",
            productPic: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/6318/1572069250647/front-left-side-47.jpg?tr-371,e-sharpen",
            productDescription: "Car",
            usersMax: 1000,
            endByTime: false,
            users: [{
                firstName: `nir`,
                lastName: `reani`,
                email: `nir@gmail.com`,
                address: `tel aviv`
            },
            {
                firstName: `aviv`,
                lastName: `hakmon`,
                email: `aviv@gmail.com`,
                address: `ramat gan`

            },
            {
                firstName: `ohad`,
                lastName: `shapira`,
                email: `ohadshap@gmail.com`,
                address: `herzelia`
            },
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`
            },
            {
                firstName: `gili`,
                lastName: `cohen`,
                email: `gili@gmail.com`,
                address: `jerusalem`
            },
            {
                firstName: `eli`,
                lastName: `levi`,
                email: `eli@gmail.com`,
                address: `Kibuz dafna`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            }],
            done: false
        },
        {
            entryFee: 30,
            isProduct: true,
            productPrize: "Dyson v11",
            productPic: "https://www.netoneto.co.il/images/itempics/V7TRIGGER_15052019093705_large.jpg",
            productDescription: "dyson v11",
            usersMax: 10,
            users: [{
                firstName: `nir`,
                lastName: `reani`,
                email: `nir@gmail.com`,
                address: `tel aviv`
            },
            {
                firstName: `aviv`,
                lastName: `hakmon`,
                email: `aviv@gmail.com`,
                address: `ramat gan`

            },
            {
                firstName: `ohad`,
                lastName: `shapira`,
                email: `ohadshap@gmail.com`,
                address: `herzelia`
            },
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`
            },
            {
                firstName: `gili`,
                lastName: `cohen`,
                email: `gili@gmail.com`,
                address: `jerusalem`
            },
            {
                firstName: `eli`,
                lastName: `levi`,
                email: `eli@gmail.com`,
                address: `Kibuz dafna`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            }],
            done: false
        },
        {
            entryFee: 22,
            isProduct: true,
            productPrize: "Drone",
            productPic: "https://res.cloudinary.com/shufersal/image/upload/f_auto,q_auto/v1551800922/prod/product_images/products_zoom/XEP64_Z_P_6958265159602_1.png",
            productDescription: "Drone",
            usersMax: 10,
            users: [{
                firstName: `nir`,
                lastName: `reani`,
                email: `nir@gmail.com`,
                address: `tel aviv`
            },
            {
                firstName: `aviv`,
                lastName: `hakmon`,
                email: `aviv@gmail.com`,
                address: `ramat gan`

            },
            {
                firstName: `ohad`,
                lastName: `shapira`,
                email: `ohadshap@gmail.com`,
                address: `herzelia`
            },
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`
            },
            {
                firstName: `gili`,
                lastName: `cohen`,
                email: `gili@gmail.com`,
                address: `jerusalem`
            },
            {
                firstName: `eli`,
                lastName: `levi`,
                email: `eli@gmail.com`,
                address: `Kibuz dafna`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            }],
            done: false
        },
        {
            entryFee: 100,
            isProduct: false,
            moneyPrize: 10000,
            usersMax: 10,
            users: [{
                firstName: `nir`,
                lastName: `reani`,
                email: `nir@gmail.com`,
                address: `tel aviv`
            },
            {
                firstName: `aviv`,
                lastName: `hakmon`,
                email: `aviv@gmail.com`,
                address: `ramat gan`

            },
            {
                firstName: `ohad`,
                lastName: `shapira`,
                email: `ohadshap@gmail.com`,
                address: `herzelia`
            },
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`
            },
            {
                firstName: `gili`,
                lastName: `cohen`,
                email: `gili@gmail.com`,
                address: `jerusalem`
            },
            {
                firstName: `eli`,
                lastName: `levi`,
                email: `eli@gmail.com`,
                address: `Kibuz dafna`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            }],
            winner:{},
            done: false
        },
        {
            entryFee: 50,
            isProduct: false,
            moneyPrize: 50000,
            usersMax: 100,
            users: [{
                firstName: `nir`,
                lastName: `reani`,
                email: `nir@gmail.com`,
                address: `tel aviv`
            },
            {
                firstName: `aviv`,
                lastName: `hakmon`,
                email: `aviv@gmail.com`,
                address: `ramat gan`

            },
            {
                firstName: `ohad`,
                lastName: `shapira`,
                email: `ohadshap@gmail.com`,
                address: `herzelia`
            },
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`
            },
            {
                firstName: `gili`,
                lastName: `cohen`,
                email: `gili@gmail.com`,
                address: `jerusalem`
            },
            {
                firstName: `eli`,
                lastName: `levi`,
                email: `eli@gmail.com`,
                address: `Kibuz dafna`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            }],
            winner:
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`,
            },
            done: true
        },
        {
            entryFee: 1000,
            isProduct: false,
            moneyPrize: 1000000,
            usersMax: 1000,
            users: [{
                firstName: `nir`,
                lastName: `reani`,
                email: `nir@gmail.com`,
                address: `tel aviv`
            },
            {
                firstName: `aviv`,
                lastName: `hakmon`,
                email: `aviv@gmail.com`,
                address: `ramat gan`

            },
            {
                firstName: `ohad`,
                lastName: `shapira`,
                email: `ohadshap@gmail.com`,
                address: `herzelia`
            },
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`
            },
            {
                firstName: `gili`,
                lastName: `cohen`,
                email: `gili@gmail.com`,
                address: `jerusalem`
            },
            {
                firstName: `eli`,
                lastName: `levi`,
                email: `eli@gmail.com`,
                address: `Kibuz dafna`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            }],
            winner:{},
            done: false
        },
        {
            entryFee: 50,
            isProduct: false,
            moneyPrize: 50000,
            usersMax: 1000,
            users: [{
                firstName: `nir`,
                lastName: `reani`,
                email: `nir@gmail.com`,
                address: `tel aviv`
            },
            {
                firstName: `aviv`,
                lastName: `hakmon`,
                email: `aviv@gmail.com`,
                address: `ramat gan`

            },
            {
                firstName: `ohad`,
                lastName: `shapira`,
                email: `ohadshap@gmail.com`,
                address: `herzelia`
            },
            {
                firstName: `ohad`,
                lastName: `gilboa`,
                email: `ohadgil@gmail.com`,
                address: `eilat`
            },
            {
                firstName: `gili`,
                lastName: `cohen`,
                email: `gili@gmail.com`,
                address: `jerusalem`
            },
            {
                firstName: `eli`,
                lastName: `levi`,
                email: `eli@gmail.com`,
                address: `Kibuz dafna`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `gidi`,
                lastName: `gov`,
                email: `gidi@gmail.com`,
                address: `LA`
            },
            {
                firstName: `pini`,
                lastName: `gilad`,
                email: `pini@gmail.com`,
                address: `NYC`
            }],
            winner:{},
            done: false
        }
    ]

    const saveDummyData = async function() {
        for(let l of dummyLotteries) {
            let newLottery = new Lottery({
                entryFee: l.entryFee, 
                isProduct: l.isProduct,
                moneyPrize: l.moneyPrize,
                productPrize: l.productPrize,
                productPic: l.productPic,
                productDescription: l.productDescription,
                usersMax: l.usersMax,
                endByTime: l.endByTime,
                users: l.users,
                winner: l.winner,
                done: l.done
            })
            await newLottery.save()
        }
    }
    
    saveDummyData()

    module.exports = dummyLotteries
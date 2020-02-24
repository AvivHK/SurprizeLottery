// const dummy = require('../dummyData/dummy')

// console.log(dummy[9]);
class LotteryManager {

  async getWinners() {
    let winners = await $.get("winners");
    return winners;
  }

  async getLottery(isProduct) {
    let lotteries = await $.get(`/lottery/${isProduct}`);
    return lotteries;
  }

  async addUserToLottery(lotteryID) {
    let lottery = await $.ajax({
      type: "PUT",
      url: `lottery/${lotteryID}`,
      data: {
        firstName: `infoFromPaypal[firstName]`,
        lastName: `infoFromPaypal[lastName]`,
        email: `infoFromPaypal[email]`,
        address: `infoFromPaypal[address]`
      },
      success: function (data) {
        console.log(`sent ${data}`);
      },
      error: function () {
        console.log(`failed sending`);
      }
    });
  }
  chooseLotteryWinner(lotteryID) {
    const lotteryData = getOneLottery(lotteryID)
    this.addAWinner(lotteryID,lotteryData.users[Math.floor(Math.random() * users.length)])

return winner
  }

}
// const winner = new LotteryManager()


//  winner.lotteryWinner(dummy[9])


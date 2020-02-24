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
      success: function(data) {
        console.log(`sent ${data}`);
      },
      error: function() {
        console.log(`failed sending`);
      }
    });
  }
}

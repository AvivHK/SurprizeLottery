class LotteryManager {

  async getWinners() {
    let winners = await $.get("winners");
    return winners;
  }

  async getLottery(isProduct) {
    let lotteries = await $.get(`/lottery/${isProduct}`);
    return lotteries;
  }

  async getOneLottery(lotteryID) {
    let lottery = await $.get(`/oneLottery/${lotteryID}`);
    return lottery;
  }

  async addUserToLottery(lotteryID, details) {
    await $.ajax({
      type: "PUT",
      url: `lottery/${lotteryID}`,
      data: {
        firstName: details.payer.name.given_name,
        lastName: details.payer.name.surname,
        email: details.payer.email_address,
        address: details.payer.address.address_line_1 + ' ' + details.payer.address.admin_area_2 + ' ' + details.payer.address.admin_area_1 + ' ' + details.payer.address.postal_code + ' ' + details.payer.address.country_code
      },
      success: function (data) {
        console.log(`sent ${data}`);
      },
      error: function () {
        console.log(`failed sending`);
      }
    });
  }

  async addAWinner(lotteryID, details) {
    await $.ajax({
      type: "PUT",
      url: `winner/${lotteryID}`,
      data: {
        firstName: details.firstName,
        lastName: details.lastName,
        email: details.email,
        address: details.address
      },
      success: function (data) {
        console.log(`sent ${data}`);
      },
      error: function () {
        console.log(`failed sending`);
      }
    });
  }

  async chooseLotteryWinner(lotteryID) {
    const lotteryData = await this.getOneLottery(lotteryID)
    this.addAWinner(lotteryID, lotteryData.users[Math.floor(Math.random() * lotteryData.users.length)])
  }

  async addNewLottery(lotteryDetails){
    await $.ajax({
      type: "POST",
      url: `/lottery/newLottery`,
      data: {
        entryFee: lotteryDetails.entryFee,
        isProduct: lotteryDetails.isProduct,
        moneyPrize: lotteryDetails.moneyPrize,
        productType: lotteryDetails.productType,
        productPrize: lotteryDetails.productPrize,
        productPic: lotteryDetails.productPic,
        productDescription: lotteryDetails.productDescription,
        dueDate: lotteryDetails.dueDate,
        usersMax: lotteryDetails.usersMax,
        endByTime: lotteryDetails.endByTime,
        done: false
      },
      success: function (data) {
        console.log(`sent ${data}`);
      },
      error: function () {
        console.log(`failed sending`);
      }
    });
  }
 
}
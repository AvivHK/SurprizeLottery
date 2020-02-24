class LotteryManager {

  async getWinners() {
    let winners = await $.get("winners");
    return winners;
  }

  async getLottery(isProduct) {
    let lotteries = await $.get(`/lottery/${isProduct}`);
    return lotteries;
  }

  async addUserToLottery(lotteryID, details) {
    console.log(details.payer)
    let lottery = await $.ajax({
      type: "PUT",
      url: `lottery/${lotteryID}`,
      data: {
        firstName: details.payer.name.given_name,
        lastName: details.payer.name.surname,
        email: details.payer.email_address,
        address: details.payer.address.address_line_1 + ' ' + details.payer.address.address_area_2 + ' ' + details.payer.address.address_area_1 + ' ' + details.payer.address.address_postal_code + ' ' + details.payer.address.country_code
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

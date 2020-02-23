const lotteryManager = new LotteryManager();
const renderer = new Renderer();

const loadHomePage = function() {
  renderer.renderHomePage();
};
loadHomePage();

$(`.container`).on(`click`, `#money`, async function() {
  let moneyData = await lotteryManager.getLottery(false);
  renderer.renderLottery(moneyData);
});

$(`.container`).on(`click`, `#product`, async function() {
  let productData = await lotteryManager.getLottery(true);
  renderer.renderLottery(productData);
});

$(`.container`).on(`click`, `#WinnerList`, async function() {
  let WinnersData = await lotteryManager.getLottery();
  renderer.renderWinners(WinnersData);
});
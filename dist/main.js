const lotteryManager = new LotteryManager();
const renderer = new Renderer();

const loadHomePage = function () {
  renderer.renderHomePage();
};
loadHomePage();

$(`body`).on(`click`, `#money`, async function () {
  let moneyData = await lotteryManager.getLottery(false);
  console.log(moneyData)
  renderer.renderLottery(moneyData);
});

$(`body`).on(`click`, `#product`, async function () {
  let productData = await lotteryManager.getLottery(true);
  console.log(productData)
  renderer.renderLottery(productData);
});

$(`body`).on(`click`, `#WinnerList`, async function () {
  let WinnersData = await lotteryManager.getLottery();
  renderer.renderWinners(WinnersData);
});

$('body').on("click", '#siteName', async function(){
  loadHomePage()
})
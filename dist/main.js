const lotteryManager = new LotteryManager();
const renderer = new Renderer();

const loadHomePage = function () {
  renderer.renderHomePage();
};
loadHomePage();

$(`body`).on(`click`, `#money`, async function () {
  let moneyData = await lotteryManager.getLottery(false);
  renderer.renderLottery(moneyData);
});

$(`body`).on(`click`, `#product`, async function () {
  let productData = await lotteryManager.getLottery(true);
  renderer.renderLottery(productData);
});

$(`body`).on(`click`, `#WinnerList`, async function () {
  let winnersData = await lotteryManager.getWinners();
  renderer.renderWinners(winnersData);
});


$('body').on("click", '#siteName', async function () {
  loadHomePage()
})














$(`body`).on(`click`, `.open-button`, function() {
  let amount =parseInt($(this).closest(`div`).siblings(`.buyIn`).text())
  let id = $(this).closest('.card').data('id')
  document.getElementById("myForm").style.display = "block";
  pay(amount,id)
})



function pay(amount,id) {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'black',
      layout: 'horizontal',
      label: 'pay',
      tagline: true
    },
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: (amount).toString()
          }
        }]
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {      
        lotteryManager.addUserToLottery(id,details)
      });
    }
  }).render('.paypal-button-container');
}


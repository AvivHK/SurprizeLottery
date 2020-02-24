const lotteryManager = new LotteryManager();
const renderer = new Renderer();

const loadHomePage = function () {
  renderer.renderHomePage();
};
loadHomePage();

function getTimeRemaining(dueDate){
  let t = Date.parse(dueDate) - Date.parse(new Date());
  let seconds = Math.floor( (t/1000) % 60 );
  let minutes = Math.floor( (t/1000/60) % 60 );
  let hours = Math.floor( (t/(1000*60*60)) % 24 );
  let days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(timer, dueDate){
  let clock = document.getElementsByClassName(timer);
  let lotteryID = $(this).closest('.card').data.id()
  let timeinterval = setInterval(function(){
    let t = getTimeRemaining(dueDate);
    clock.innerHTML = t.days + 'd, ' + t.hours + 'h, ' + t.minutes + 'm,' + t.seconds + 's.';
    if(t.total<=0){

      chooseLotteryWiner(lotteryID)
      clearInterval(timeinterval);
    }
  },1000);
}

function updateClock(){
  let dueDate = $(this).closest('.lotteryInfo').find('.dueDate').text()
  let t = getTimeRemaining(dueDate);
  let lotteryID = $(this).closest('.card').data().id
  clock.innerHTML = t.days + 'd, ' + t.hours + 'h, ' + t.minutes + 'm,' + t.seconds + 's.';
  if(t.total<=0){
    chooseLotteryWiner(lotteryID)
    clearInterval(timeinterval);
  }
}



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


$('body').on("click", '#siteName', function () {
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


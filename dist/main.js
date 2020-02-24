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

updateClock(); // run function once at first to avoid delay
let timeinterval = setInterval(updateClock,1000);


$(`body`).on(`click`, `#money`, async function () {
  let moneyData = await lotteryManager.getLottery(false);
  console.log(moneyData)
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




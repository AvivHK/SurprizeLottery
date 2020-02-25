const lotteryManager = new LotteryManager();
const renderer = new Renderer();
let interval = 0;
const loadHomePage = function () {
  renderer.renderHomePage();
};
loadHomePage();


//Homepage OnClicks()

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

$('body').on("click", '.goHome', function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  loadHomePage()
})

$('body').on("click", '.goMoney', async function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  let moneyData = await lotteryManager.getLottery(false);
  renderer.renderLottery(moneyData);
})


$('body').on("click", '.goProduct', async function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  let productData = await lotteryManager.getLottery(true);
  renderer.renderLottery(productData);
})

$('body').on("click", '.goWinner', async function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  let winnersData = await lotteryManager.getWinners();
  renderer.renderWinners(winnersData);
})


$('body').on("click", '.goAddMoney', function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  renderer.renderNewMoneyLottery()
})

$('body').on("click", '.goAddProduct', function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  renderer.renderNewProductLottery()
})

$('body').on("click", '#moneySubmit', async function(){
  let newDueDate = $(".theDueDate").val()
  let newMoneyPrize = $("#theMoneyPrize").val()
  let newEntreeFee = $(".theEntryFee").val()
  let newLottery = {
    entryFee: newEntreeFee,
    isProduct: false,
    moneyPrize: newMoneyPrize,
    dueDate: newDueDate,
    done: false
  }
  $("input[type='datetime-local']").val("")
  $("#theMoneyPrize").val("")
  $("input[type='number']").val("")
  lotteryManager.addNewLottery(newLottery)
})

$('body').on("click", '#productSubmit', async function(){
  let newDueDate = $(".theDueDate").val()
  let newType = $("input[name='productType']:checked").val();
  let newProductPrize = $("#theProduct").val()
  let newEntreeFee = $(".theEntryFee").val()
  let newPic = $("#thePic").val()
  let newDescript = $("#theDescription").val()
  let newLottery = {
    entryFee: newEntreeFee,
    isProduct: true,
    productType: newType,
    productPrize: newProductPrize,
    productPic: newPic,
    productDescription: newDescript,
    dueDate: newDueDate,
    done: false
  }
  $("input[type='datetime-local']").val("")
  $("input[name='productType']").prop("checked", false);
  $("#theProduct").val("")
  $("input[type='number']").val("")
  $("#thePic").val("")
  $("#theDescription").val("")
  lotteryManager.addNewLottery(newLottery)
})

//PayPal Functions

$(`body`).on(`click`, `.buyPayPal`, function() {
  let amount = parseInt($(this).siblings(`.popUpBuyIn`).text())
  console.log(amount)
  let id = $(this).closest('.popUpCard').data('id')

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
            value: amount
          }
        }]
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {   
        console.log(id)   
        lotteryManager.addUserToLottery(id,details)
      });
    }
  }).render('#paypal-button-container');
}






//PopUp Functions

$('body').on('click','.card', async function(){
  let id = $(this).data('id')
  let lottery = await lotteryManager.getOneLottery(id);
  div_show(id)
  timer(lottery.dueDate)
})

async function div_show(id) {
  $('#popUpCard').css("display", "block");
  let lottery = await lotteryManager.getOneLottery(id);
  renderer.renderPopUp(lottery);
  }

  function div_hide(){
  document.getElementById('popUpCard').style.display = "none";
  clearInterval(interval);
  document.getElementById("demo").innerHTML = "EXPIRED";
  }

  function timer(dueDate){
    // Set the date we're counting down to
    let countDownDate = new Date(dueDate).getTime();
    
    // Update the count down every 1 second
    interval = setInterval(function() {
      
      // Get today's date and time
      let now = new Date().getTime();
        
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
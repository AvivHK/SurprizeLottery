const lotteryManager = new LotteryManager();
const renderer = new Renderer();
let interval = 0;


const loadHomePage = function () {
  renderer.renderHomePage();
};
loadHomePage();


//Homepage OnClicks()

$(`body`).on(`click`, `#money`, async function () {
  $("#theFilter").empty()
  $("#theFilter").html(`
  <div class="moneyFilters">
    <div class="filterParams pRange"> <strong>Ticket Price Range :</strong></div>
    <div class="filterParams"></div>
    <div class="filterParams"> Low </div>
    <div class="filterParams"> Medium </div>
    <div class="filterParams">High </div>
  </div>
  `)
  let moneyData = await lotteryManager.getLottery(false);
  renderer.renderLottery(moneyData);
});

$(`body`).on(`click`, `#product`, async function () {
  $("#theFilter").html(`
  <div class="productFilters">
    <div class="prodFilterParams">Vehicles</div>
    <div class="prodFilterParams">Gadgets</div>
    <div class="prodFilterParams">Electrinic devices</div>
    <div class="prodFilterParams">Clothing items</div>
    <div class="prodFilterParams">Furniture</div>
    <div class="prodFilterParams">Others</div>
  </div>
  `)
  let productData = await lotteryManager.getLottery(true);
  renderer.renderLottery(productData);
  

});

$(`body`).on(`click`, `#WinnerList`, async function () {
  $("#theFilter").empty()
  let winnersData = await lotteryManager.getWinners();
  renderer.renderWinners(winnersData);
});

$('body').on("click", '.goHome', function () {
  $("#theFilter").empty()
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  loadHomePage()
})

$('body').on("click", '.goMoney', async function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  $("#theFilter").empty()
  $("#theFilter").html(`
  <div class="moneyFilters">
    <div class="filterParams pRange"> <strong>Ticket Price Range :</strong></div>
    <div class="filterParams"></div>
    <div class="filterParams"> Low </div>
    <div class="filterParams"> Medium </div>
    <div class="filterParams">High </div>
  </div>
  `)
  let moneyData = await lotteryManager.getLottery(false);
  renderer.renderLottery(moneyData);
})

$('body').on("click", '.goProduct', async function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  $("#theFilter").empty()
  $("#theFilter").html(`
  <div class="productFilters">
    <div class="prodFilterParams">Vehicles</div>
    <div class="prodFilterParams">Gadgets</div>
    <div class="prodFilterParams">Electrinic devices</div>
    <div class="prodFilterParams">Clothing items</div>
    <div class="prodFilterParams">Furniture</div>
    <div class="prodFilterParams">Others</div>
  </div>
  `)
  let productData = await lotteryManager.getLottery(true);
  renderer.renderLottery(productData);
})

$('body').on("click", '.goWinner', async function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  $("#theFilter").empty()
  let winnersData = await lotteryManager.getWinners();
  renderer.renderWinners(winnersData);
})


$('body').on("click", '.goAddMoney', async function () {
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  $("#theFilter").empty()
  renderer.renderNewMoneyLottery()
})

$('body').on("click", '.goAddProduct', async function () {
  $("#theFilter").empty()
  $(this).closest('#menuToggle').find('input').prop("checked", false);
  renderer.renderNewProductLottery()
})

$('body').on("click", '#moneySubmit', async function () {
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

$('body').on("click", '#productSubmit', async function () {
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
  console.log(newLottery)
  $("input[type='datetime-local']").val("")
  $("input[name='productType']").prop("checked", false);
  $("#theProduct").val("")
  $("input[type='number']").val("")
  $("#thePic").val("")
  $("#theDescription").val("")
  await lotteryManager.addNewLottery(newLottery)
})

$("body").on("click", ".prodFilterParams", async function () {
  let filterKind = $(this).text()
  console.log(filterKind);
  let relevantData = await lotteryManager.getFilteredProducts(filterKind)
  renderer.renderLottery(relevantData)
})

//PayPal Functions

$(`body`).on(`click`, `.buyPayPal`, function () {
  let amount = parseInt($(this).siblings(`.popUpBuyIn`).text())
  let id = $(this).closest('.popUpCard').data('id')
  let isProduct = $(this).closest('.popUpCard').data('isproduct')
  pay(amount, id, isProduct)

})

function pay(amount, id, isProductBool) {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'black',
      layout: 'horizontal',
      label: 'pay',
      tagline: false
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
        lotteryManager.addUserToLottery(id, details)
        div_hide()
        isProduct(isProductBool)
      });
    }
  }).render('#paypal-button-container');
}


async function isProduct(isProductBool) {
  if (isProductBool) {
    let productData = await lotteryManager.getLottery(true);
    renderer.renderLottery(productData);
  }
  else {
    let moneyData = await lotteryManager.getLottery(false);
    renderer.renderLottery(moneyData);
  }
}

//PopUp Functions

$('body').on('click', '.card', async function () {
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

function div_hide() {
  document.getElementById('popUpCard').style.display = "none";
  clearInterval(interval);
  document.getElementById("demo").innerHTML = "EXPIRED";
}

function timer(dueDate) {
  // Set the date we're counting down to
  let countDownDate = new Date(dueDate).getTime();

  // Update the count down every 1 second
  interval = setInterval(function () {

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
      checkIfDone()
      div_hide()
      renderer.renderHomePage()
    }
  }, 1000);
}

async function checkIfDone() {
  let lotteryProduct = await lotteryManager.getLottery(true)
  lotteryProduct.forEach(a => {
    if (!a.done) {
      if (new Date(a.dueDate) < new Date().getTime()) {
        lotteryManager.chooseLotteryWinner(a._id)
      }
    }
  })
  let lotteryMooney = await lotteryManager.getLottery(false)
  lotteryMooney.forEach(a => {
    if (!a.done && (new Date(a.dueDate) < new Date().getTime())) {
      lotteryManager.chooseLotteryWinner(a._id)
    }
  })
}
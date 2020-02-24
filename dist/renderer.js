class Renderer {
  renderHomePage() {
    $(`#container`).empty();
    $(`#container`).append(
      ` <div id="money">
      <i class="fas fa-money-bill-wave d"></i>
      <p>money</p>
      </div>
        <div id="product">
        <i class="fas fa-gifts"></i>
        <p>product</p>
        </div>
        <div id="WinnerList">
        <i class="fas fa-trophy"></i>
        <p>WinnerList</p>
        </div>`
    );
  }

  renderLottery(lotteryData) {
    const source = $(`#lotteryTemplate`).html();
    const template = Handlebars.compile(source);
    const newHTML = template({ lotteryData });
    $(`#container`).empty();
    $(`#container`).append(newHTML);
  }

  renderWinners(winnerData) {
    const source = $(`#winnersTemplate`).html();
    const template = Handlebars.compile(source);
    const newHTML = template({ winnerData });
    $(`#container`).empty();
    $(`#container`).append(newHTML);
  }


  renderPopUp(lotteryData) {
    const source = $(`#popUpTemplate`).html();
    const template = Handlebars.compile(source);
    const newHTML = template(lotteryData);
    $(`#popUpContainer`).empty();
    $(`#popUpContainer`).append(newHTML);

  }

  renderAddNewLottery() {
    $(`#container`).empty();
    $(`#container`).append(`<div>
    <input type="radio" id="checkIsProduct" name="prodORmon">
    <label for="checkIsProduct">Product prize</label><br>
    
    <input type="radio" id="checkIsMoney" name="prodORmon">
    <label for="checkIsMoney">Money prize</label><br>

    <label for="theDueDate">Lottery Due Date</label>
    <input type="datetime-local" id="theDueDate">

    <h4>Fill for <strong>Money</strong> prizes only!</h4>
    
    <label for="theMoneyPrize">How much is the lottery for?</label>
    <input type="number" id="theMoneyPrize"><br>
</div>

<div>
    <h4>Fill for <strong>Product</strong> prizes only!</h4>
    
    <input type="radio" id="vehicle" name="productType">
    <label for="vehicle">Vehicle</label><br>

    <input type="radio" id="gadget" name="productType">
    <label for="gadget">Gadget</label><br>

    <input type="radio" id="electonic" name="productType">
    <label for="electonic">Electrinic device</label><br>

    <input type="radio" id="clothing" name="productType">
    <label for="clothing">Clothing item</label><br>

    <input type="radio" id="furniture" name="productType">
    <label for="furniture">Furniture</label><br>

    <input type="radio" id="other" name="productType">
    <label for="other">Other</label><br>
  </div>
  <div>
    <label for="theProduct">What's the product</label><br>
    <input type="text" id="theProduct"><br>

    <label for="thePic">Picture URL</label><br>
    <input type="text" id="thePic" style="width: 200px;"><br>

    <label for="theDescription">Product Description</label><br>
    <textarea id="theDescription" style="width:200px; height:200px;" placeholder="type something"></textarea><br>
</div>

    `)
  }
}

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

  
  renderNewMoneyLottery() {
    $(`#container`).empty();
    $(`#container`).append(`
    <div></div>
    <div id="moneyForm">

      <label class="submitting" for="theDueDate">Lottery Due Date</label><br>
      <input class="submitting theDueDate" type="datetime-local"><br>
      
      <label class="submitting" for="theMoneyPrize">How much is the lottery for?</label><br>
      <input class="submitting" type="number" id="theMoneyPrize" placeholder="Enter price"><br>
      
      <label class="submitting" for="theEntryFee">How much is the entry fee?</label>
      <input class="submitting theEntryFee" type="number"  placeholder="Enter Fee"><br>

      
    </div>
    <div></div>

    <div></div>
    <div><button class="submitting" id="moneySubmit">Submit</button></div>
    <div></div>

    `)
  }

  renderNewProductLottery() {
    
    $(`#container`).empty();
    $(`#container`).append(`
    
    <div class="productForm">

      <label class="submitting" for="theDueDate">Lottery Due Date</label><br>
      <br>
      <input class="submitting theDueDate" type="datetime-local"><br>

      <input class="submitting" type="radio" id="vehicle" name="productType" value="Vehicles">
      <label class="submitting" for="vehicle">Vehicle</label><br>

      <input class="submitting" type="radio" id="gadget" name="productType" value="Gadgets">
      <label class="submitting" for="gadget">Gadget</label><br>

      <input class="submitting" type="radio" id="electonic" name="productType" value="Electrinic devices">
      <label class="submitting" for="electonic">Electrinic Device</label><br>

      <input class="submitting" type="radio" id="clothing" name="productType" value="Clothing items">
      <label class="submitting" for="clothing">Clothing Item</label><br>

      <input class="submitting" type="radio" id="furniture" name="productType" value="Furniture">
      <label class="submitting" for="furniture">Furniture</label><br>

      <input class="submitting" type="radio" id="other" name="productType" value="Others">
      <label class="submitting" for="other">Other</label><br>
      
    </div>
    
    <div class="productForm">
        
      <label class="submitting" for="theProduct">What's the product</label><br>
      <input class="submitting" type="text" id="theProduct"><br>

      <label class="submitting" for="theEntryFee">How much is the entry fee?</label>
      <input class="submitting theEntryFee" type="number" placeholder="Enter Fee"><br>
      
      <label class="submitting" for="thePic">Picture URL</label><br>
      <input class="submitting" type="text" id="thePic" style="width: 200px;"><br>

      

    </div>

    <div class="productForm">
      <label class="submitting" for="theDescription">Product Description</label><br>
      <textarea id="theDescription" style="width:150px; height:200px;" placeholder="type something"></textarea><br>
    </div>

    <div></div>
    <div><button class="submitting" id="productSubmit">Submit</button></div>
    <div></div>
    `)
   
  }


}
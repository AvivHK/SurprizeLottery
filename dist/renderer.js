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
}

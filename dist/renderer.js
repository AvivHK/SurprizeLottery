class Renderer {
  renderHomePage() {
    $(`#container`).empty();
    $(`#container`).append(
      ` <div class="animated zoomIn" id="money">money</div>
        <div class="animated zoomIn" id="product">product</div>
        <div class="animated zoomIn" id="WinnerList">WinnerList</div>`
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
    const newHTML = template({winnerData});
    console.log(winnerData)
    $(`#container`).empty();
    $(`#container`).append(newHTML);
  }
}

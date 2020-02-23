class Renderer {
  renderHomePage() {
    $(`#container`).empty();
    $(`#container`).append(
      `<div id="homepage">
        <div id="money">money</div>
        <div id="product">product</div>
        <div id="Winnerlist">Winnerlist</div>
      </div>`
    );
  }

  renderlottery(lotteryData) {
    const source = $(`#lotteryTemplate`).html();
    const template = Handlebars.compile(source);
    const newHTML = template({ lotteryData });
    $(`#container`).empty();
    $(`#container`).append(newHTML);
  }

  renderWinners(lotteryData) {
    const source = $(`#WinnersTemplate`).html();
    const template = Handlebars.compile(source);
    const newHTML = template({ lotteryData });
    $(`#container`).empty();
    $(`#container`).append(newHTML);
  }
}

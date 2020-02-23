const source = $(`#lottery-template`).html();
const template = Handlebars.compile(source);

class Renderer {
  renderHomePage() {
    $(`#container`).empty();
    $(`#container`).append(
      `<div class="homepage">
        <div class="money">money</div>
        <div class="product">product</div>
        <div class="Winnerlist">Winnerlist</div>
      </div>`
    );
  }

  renderlottery(data) {
    const newHTML = template({ data });
    $(`#container`).empty();
    $(`#container`).append(newHTML);
  }

  renderWinners(data) {}
}

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.render();
  }
  render() {
    // sign.addEventListener("keydown", function (event) {
    //   if (event.keyCode === 107) {
    //     sumNum();
    //   }
    // });
    this.view.firstButton.addEventListener("click", (event) => {
      this.view.firstSpan.innerText = event.target.value;
      this.view.secondSpan.innerText =
        Number(this.view.first_num.value) + Number(this.view.second_num.value);
    });
    this.view.secondButton.addEventListener("click", (event) => {
      this.view.firstSpan.innerText = event.target.value;
      this.view.secondSpan.innerText =
        Number(this.view.first_num.value) - Number(this.view.second_num.value);
    });
    this.view.threeButton.addEventListener("click", (event) => {
      this.view.firstSpan.innerText = event.target.value;
      this.view.secondSpan.innerText =
        Number(this.view.first_num.value) * Number(this.view.second_num.value);
    });
    this.view.forthButton.addEventListener("click", (event) => {
      this.view.firstSpan.innerText = event.target.value;
      this.view.secondSpan.innerText =
        Number(this.view.first_num.value) / Number(this.view.second_num.value);
    });

    // function sumNum() {
    //   let sum = Number(first_num) + Number(second_num);
    //   result.innerHTML = sum;
    // }
  }
}

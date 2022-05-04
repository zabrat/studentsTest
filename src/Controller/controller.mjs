export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.chooseSign();
    this.refreshInputs();
  }

  refreshInputs() {
    this.view.left.addEventListener("keyup", (e) => {
      this.model.leftValue = +e.target.value;
    });
    this.view.right.addEventListener("keyup", (e) => {
      this.model.rightValue = +e.target.value;
    });
  }

  chooseSign() {
    this.view.sumButton.addEventListener("click", (e) => {
      this.view.selectedSign.innerText = e.target.innerText;
      this.calc();
    });
    this.view.subtractButton.addEventListener("click", (e) => {
      this.view.selectedSign.innerText = e.target.innerText;
      this.calc();
    });
    this.view.multiplyButton.addEventListener("click", (e) => {
      this.view.selectedSign.innerText = e.target.innerText;
      this.calc();
    });
    this.view.divideButton.addEventListener("click", (e) => {
      this.view.selectedSign.innerText = e.target.innerText;
      this.calc();
    });
  }

  calc() {
    if (this.view.selectedSign.innerText === "+") {
      this.view.result.innerText = this.model.leftValue + this.model.rightValue;
      this.model.resultValue = +this.view.result.innerText;
    } else if (this.view.selectedSign.innerText === "-") {
      this.view.result.innerText = this.model.leftValue - this.model.rightValue;
      this.model.resultValue = +this.view.result.innerText;
    } else if (this.view.selectedSign.innerText === "*") {
      this.view.result.innerText = this.model.leftValue * this.model.rightValue;
      this.model.resultValue = +this.view.result.innerText;
    } else if (this.view.selectedSign.innerText === "/") {
      this.view.result.innerText = this.model.leftValue / this.model.rightValue;
      this.model.resultValue = +this.view.result.innerText;
    }
  }
}

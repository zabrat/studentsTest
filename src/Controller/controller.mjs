export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addListenerInpL();
    this.addListenerInpR();
    this.addListenerButton();
  }

  addListenerButton() {
    this.view.buttons.forEach((el) => {
      el.addEventListener("click", () => {
        this.view.znak.innerText = el.innerText;
        this.solve();
      });
    });
  }
  addListenerInpL() {
    this.view.num1.addEventListener("keyup", (e) => {
      this.model.leftInpValue(+e.target.value);
    });
  }
  addListenerInpR() {
    this.view.num2.addEventListener("keyup", (e) => {
      this.model.rightInpValue(+e.target.value);
    });
  }

  solve() {
    if (this.view.znak.innerText === "+") {
      this.view.answer.innerText = this.model.leftValue + this.model.rightValue;
    }
    if (this.view.znak.innerText === "-") {
      this.view.answer.innerText = this.model.leftValue - this.model.rightValue;
    }
    if (this.view.znak.innerText === "*") {
      this.view.answer.innerText = this.model.leftValue * this.model.rightValue;
    }
    if (this.view.znak.innerText === ":") {
      this.view.answer.innerText = this.model.leftValue / this.model.rightValue;
    }
  }
}

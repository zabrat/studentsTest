export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.takeValues();
    this.takeButtonValue();
  }

  takeValues() {
    this.view.firstInput.addEventListener("keyup", (e) => {
      this.model.firstInputValue = e.target.value;
      this.calculation();
      this.view.result.innerText = this.model.result;
    });

    this.view.secondInput.addEventListener("keyup", (e) => {
      this.model.secondInputValue = e.target.value;
      this.calculation();
      this.view.result.innerText = this.model.result;
    });
  }

  takeButtonValue() {
    this.view.buttons.forEach((el) => {
      el.addEventListener("click", (e) => {
        this.model.signs = e.target.innerText;
        this.calculation();
        this.view.result.innerText = this.model.result;
        this.view.sign.innerText = this.model.signs;
      });
    });
  }

  calculation() {
    switch (this.model.signs) {
      case "+":
        this.model.plas();
        break;
      case "-":
        this.model.minus();
        break;
      case "/":
        this.model.division();
        break;
      case "*":
        this.model.multiply();
        break;
    }
  }
}

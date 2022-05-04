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
        this.model.result =
          +this.model.firstInputValue + +this.model.secondInputValue;
        break;
      case "-":
        this.model.result =
          +this.model.firstInputValue - +this.model.secondInputValue;
        break;
      case "/":
        this.model.result =
          this.model.firstInputValue / this.model.secondInputValue;
        break;
      case "*":
        this.model.result =
          this.model.firstInputValue * this.model.secondInputValue;
        break;
    }
  }
}

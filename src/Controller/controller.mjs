export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.GetButton();
    this.GetButtonValue();
  }

  GetButton() {
    this.view.numb1.addEventListener("keyup", (e) => {
      this.model.num1 = e.target.value;
    });
    this.view.numb2.addEventListener("keyup", (e) => {
      this.model.num2 = e.target.value;
    });
  }
  GetButtonValue() {
    this.view.buttons.forEach((el) => {
      el.addEventListener("click", (e) => {
        this.model.emblems = e.target.innerText;
        this.calculator();
        // this.view.emblem.innerText = this.model.emblems;
      });
    });
  }

  calculator() {
    switch (this.model.emblems) {
      case "+":
        this.view.result.innerText = +this.model.num1 + +this.model.num2;
        break;
      case "-":
        this.view.result.innerText = +this.model.num1 - +this.model.num2;
        break;
      case "x":
        this.view.result.innerText = +this.model.num1 * +this.model.num2;
        break;
        case ":":
          this.view.result.innerText = +this.model.num1 / +this.model.num2;
          break;
    }
  }
}

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.render();
  }
  render() {
    this.view.first_num.addEventListener("keyup", (event) => {
      this.model.firstNumber = +event.target.value;
    });
    this.view.second_num.addEventListener("keyup", (event) => {
      this.model.secondNumber = +event.target.value;
    });

    this.view.buttons.forEach((element) => {
      element.addEventListener("click", (event) => {
        this.model.currentOperator = event.target.value;
        switch (event.target.value) {
          case "+":
            this.view.firstSpan.innerText = event.target.value;
            this.view.secondSpan.innerText =
              this.model.firstNumber + this.model.secondNumber;
            this.model.result = this.view.secondSpan.innerText;
            break;
          case "-":
            this.view.firstSpan.innerText = event.target.value;
            this.view.secondSpan.innerText =
              this.model.firstNumber - this.model.secondNumber;
            this.model.result = this.view.secondSpan.innerText;
            break;
          case "/":
            this.view.firstSpan.innerText = event.target.value;
            this.view.secondSpan.innerText =
              this.model.firstNumber / this.model.secondNumber;
            this.model.result = this.view.secondSpan.innerText;
            break;
          case "*":
            this.view.firstSpan.innerText = event.target.value;
            this.view.secondSpan.innerText =
              this.model.firstNumber * this.model.secondNumber;
            this.model.result = this.view.secondSpan.innerText;
        }
      });
    });
  }
}

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    let ravno = document.querySelector(".ravno");
    this.model.znaki.forEach((el) => {
      el.addEventListener("click", () => {
        this.model.num1 = Number(document.querySelector(".firstNumber").value);
        this.model.num2 = Number(document.querySelector(".secondNumber").value);
        switch (el.innerText) {
          case "+":
            ravno.innerText = this.model.num1 + this.model.num2;
            console.log(this.model.num1, this.model.num2);
            break;
          case "-":
            ravno.innerText = this.model.num1 - this.model.num2;
            break;
          case "*":
            ravno.innerText = this.model.num1 * this.model.num2;
            break;
          case "/":
            ravno.innerText = this.model.num1 / this.model.num2;
            break;
        }
      });
    });
  }
}

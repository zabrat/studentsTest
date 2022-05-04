export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.num1.addEventListener("keyup", (e) => {
      this.model.num1 = Number(e.target.value);
    });
    this.view.num2.addEventListener("keyup", (e) => {
      this.model.num2 = Number(e.target.value);
    });

    // let ravno = document.querySelector(".ravno");

    this.view.znaki.forEach((el) => {
      el.addEventListener("click", () => {
        switch (el.innerText) {
          case "+":
            this.view.ravno.innerText = this.model.num1 + this.model.num2;
            console.log(this.model.num1, this.model.num2);
            console.log(this.view.ravno);
            break;
          case "-":
            this.view.ravno.innerText = this.model.num1 - this.model.num2;
            break;
          case "*":
            this.view.ravno.innerText = this.model.num1 * this.model.num2;
            break;
          case "/":
            this.view.ravno.innerText = this.model.num1 / this.model.num2;
            break;
        }
      });
    });
  }
}

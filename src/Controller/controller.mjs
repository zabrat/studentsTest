export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.changesBetweenNumbers();
  }

  changesBetweenNumbers() {
    this.result = document.getElementById("result");
    this.view.input1.addEventListener("keyup", (e) => {
      this.model.input1 = Number(e.target.value);
    });
    this.view.input2.addEventListener("keyup", (e) => {
      this.model.input2 = Number(e.target.value);
    });
    
    this.view.plus.addEventListener("click", (el) => {
      this.view.displaySign.innerText = " + ";
      this.result.innerText = this.model.plus();
    });
    this.view.minus.addEventListener("click", (el) => {
      this.view.displaySign.innerText = " - ";
      this.result.innerText = this.model.minus();
    });
    this.view.devide.addEventListener("click", (el) => {
      this.view.displaySign.innerText = " / ";
      this.result.innerText = this.model.devide();
    });
    this.view.multiply.addEventListener("click", (el) => {
      this.view.displaySign.innerText = " * ";
      this.result.innerText = this.model.multiply();
    });
  }
}

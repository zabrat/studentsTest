export default class View {
  constructor() {
    this.firstInput = document.querySelector(".number-one");
    this.secondInput = document.querySelector(".number-two");
    this.buttons = document.querySelectorAll("button");
    this.result = document.querySelector(".result");
    this.sign = document.querySelector(".sign");
  }
}

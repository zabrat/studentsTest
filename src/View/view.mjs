export default class View {
  constructor() {
    this.first_num = document.getElementById("first_number");
    this.second_num = document.getElementById("second_number");
    this.result = document.getElementById("result");
    this.buttons = document.querySelectorAll(".button");
    this.firstButton = document.querySelector(".first-button");
    this.secondButton = document.querySelector(".second-button");
    this.threeButton = document.querySelector(".three-button");
    this.forthButton = document.querySelector(".forth-button");
    this.firstSpan = document.querySelector(".first-span");
    this.secondSpan = document.querySelector(".second-span");
  }
}

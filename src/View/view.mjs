export default class View {
  constructor() {
    this.left = document.getElementById("left-hand");
    this.right = document.getElementById("right-hand");
    this.selectedSign = document.getElementById("selected-sign");
    this.result = document.getElementById("result");
    this.sumButton = document.getElementById("sum");
    this.subtractButton = document.getElementById("subtract");
    this.multiplyButton = document.getElementById("multiply");
    this.divideButton = document.getElementById("divide");
  }
}

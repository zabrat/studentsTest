export default class Model {
  constructor() {
    this.leftValue = +document.getElementById("left-hand").value;
    this.rightValue = +document.getElementById("right-hand").value;
    this.selectedSignValue = document.getElementById("selected-sign").innerText;
    this.resultValue = +document.getElementById("result").innerText;
  }
}

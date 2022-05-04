export default class View {
  constructor() {
    this.left = document.getElementById("left-hand");
    this.right = document.getElementById("right-hand");
    this.selectedSign = document.getElementById("selected-sign");
    this.result = document.getElementById("result");
    this.signsArr = document.querySelectorAll(".sign");
  }
}

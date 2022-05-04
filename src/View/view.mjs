export default class View {
  constructor() {
    this.root = document.getElementById("root"); 
    this.firstNumber = document.getElementById('fnumber')
    this.secondNumber = document.getElementById('lnumber')
    this.operator = document.querySelectorAll('button')
    this.result = document.getElementById('equal');
    this.sign = document.getElementById('sign')
  }

  


}

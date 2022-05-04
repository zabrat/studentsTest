export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
  
  init() {
    this.view.render();

    for (let button of this.view.buttons) {
      button.addEventListener('click', (e) => 
      {this.view.mode.innerText = e.target.innerText;
      this.solve()});
    }

    this.view.input1.addEventListener('input', (e) => {
        this.model.firstNumber =e.target.value; 
        this.solve();
  });

  this.view.input2.addEventListener('input', (e) => {
      this.model.secondNumber =e.target.value;
      this.solve();
  });
  }
  solve() {
    const input1 = this.model.firstNumber;
    const input2 = this.model.secondNumber;
    switch (this.view.mode.innerText) {
      case '+':
        this.view.result.innerText = input1 + input2;
      case '-':
        this.view.result.innerText =  input1 - input2;
      case '*':
        this.view.result.innerText =  input1 * input2;
      case '/':
        this.view.result.innerText =  input1 / input2;

      default:
        return 'error';
    }
  }
    }
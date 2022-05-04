export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.plusButton.addEventListener('keyup', (e) => {
      this.model.firstNumber = Number(e.target.value)
    });
    this.view.minusButton.addEventListener('keyup', (e) => {
      this.model.secondNumber = Number(e.target.value)
    });
    
    this.view.operator.forEach((el) => {
      el.addEventListener('click', (event) => {
        switch(el.InnerHTML) {
          case '+':
            this.view.result.InnerHTML + this.model.firstNumber + this.model.secondNumber
            this.view.sign.InnerHTML = '+'
            break;
        }
      })
    })
  }
}
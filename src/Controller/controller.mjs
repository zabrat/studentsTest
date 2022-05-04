export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    
    

    this.view.firstNumber.addEventListener('keyup', (e) =>{
      this.model.firstNumber = Number(e.target.value)
    });

    this.view.secondNumber.addEventListener('keyup', (e) =>{
      this.model.secondNumber = Number(e.target.value)
    });
    this.view.operator.forEach((el) => {
      
      el.addEventListener('click', (event) =>{
        event.preventDefault();
        console.log(el.innerHTML)
        switch(el.innerHTML){
          case '+':
            console.log(this.model.firstNumber + this.model.secondNumber)
            this.view.result.innerHTML = this.model.firstNumber + this.model.secondNumber
            this.view.sign.innerHTML = '+'
            break;
          case '-':
              console.log(this.model.firstNumber - this.model.secondNumber)
              this.view.result.innerHTML = this.model.firstNumber - this.model.secondNumber
              this.view.sign.innerHTML = '-'
              break;
          case '*':
              console.log(this.model.firstNumber * this.model.secondNumber)
              this.view.result.innerHTML = this.model.firstNumber * this.model.secondNumber
              this.view.sign.innerHTML = '*'
              break;
          case '/':
              console.log(this.model.firstNumber / this.model.secondNumber)
              this.view.result.innerHTML = this.model.firstNumber / this.model.secondNumber
              this.view.sign.innerHTML = '/'
              break;

        }
      })
    })

  }
}

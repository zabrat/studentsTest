export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.mainTask();
  }


  mainTask() {
      this.view.button1.addEventListener("click", () => {
      this.view.otvet.innerText = Number(this.view.from.value)+Number(this.view.to.value)
    }); 

    
      this.view.button2.addEventListener("click", () => {
      this.view.otvet.innerText = Number(this.view.from.value)-Number(this.view.to.value)
      });
    
    
      this.view.button3.addEventListener("click", () => {
      this.view.otvet.innerText = Number(this.view.from.value)*Number(this.view.to.value)
      });  

      this.view.button4.addEventListener("click", () => {
      this.view.otvet.innerText = Number(this.view.from.value)/Number(this.view.to.value)
      });  
      
    
  }

}